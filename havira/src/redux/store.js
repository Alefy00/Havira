import { configureStore } from '@reduxjs/toolkit'; // Importa a função configureStore do Redux Toolkit
import usersReducer from './usersSlice'; // Importa o reducer usersReducer do arquivo usersSlice.js

// Configura e cria a store do Redux
export const store = configureStore({
  reducer: {
    users: usersReducer, // Define o reducer usersReducer para lidar com as ações relacionadas aos usuários
  },
});

export default store; // Exporta a store como padrão
