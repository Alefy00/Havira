import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'; // Importa createSlice e createAsyncThunk do Redux Toolkit
import axios from 'axios'; // Importa o axios para fazer requisições HTTP

// Estado inicial do slice de usuários
const initialState = {
  users: [], // Lista de todos os usuários
  filteredUsers: [], // Lista de usuários filtrados
  status: 'idle', // Estado da requisição (idle, loading, succeeded, failed)
  error: null, // Erro da requisição, se houver
};

// Função assíncrona para buscar usuários da API
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users'); // Faz uma requisição GET para a API
  return response.data; // Retorna os dados dos usuários
});

// Criação do slice de usuários
const usersSlice = createSlice({
  name: 'users', // Nome do slice
  initialState, // Estado inicial
  reducers: {
    // Reducer para adicionar um novo usuário
    addUser: (state, action) => {
      state.users.push(action.payload); // Adiciona o novo usuário à lista de usuários
      state.filteredUsers.push(action.payload); // Adiciona o novo usuário à lista de usuários filtrados
    },
    // Reducer para filtrar usuários com base em uma consulta
    filterUsers: (state, action) => {
      const query = action.payload.toLowerCase(); // Converte a consulta para minúsculas
      state.filteredUsers = state.users.filter(user => 
        user.name.toLowerCase().includes(query) || // Filtra usuários pelo nome
        user.email.toLowerCase().includes(query) || // Filtra usuários pelo email
        user.address.city.toLowerCase().includes(query) // Filtra usuários pela cidade
      );
    },
  },
  // Manipuladores extras para lidar com as ações assíncronas geradas pelo createAsyncThunk
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading'; // Atualiza o estado para 'loading' quando a requisição está pendente
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded'; // Atualiza o estado para 'succeeded' quando a requisição é concluída com sucesso
        state.users = action.payload; // Atualiza a lista de usuários com os dados recebidos da API
        state.filteredUsers = action.payload; // Atualiza a lista de usuários filtrados com os dados recebidos da API
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed'; // Atualiza o estado para 'failed' quando a requisição é rejeitada
        state.error = action.error.message; // Define o erro da requisição
      });
  },
});

// Exporta as actions geradas pelo createSlice
export const { addUser, filterUsers } = usersSlice.actions;

// Exporta o reducer do slice de usuários
export default usersSlice.reducer;
