import { useEffect } from 'react'; // Importa o hook useEffect do React
import { useDispatch, useSelector } from 'react-redux'; // Importa os hooks useDispatch e useSelector do react-redux
import { fetchUsers } from '../redux/usersSlice'; // Importa a ação fetchUsers do slice de usuários

const UserList = () => {
  const dispatch = useDispatch(); // Obtém a função dispatch para enviar ações ao redux
  // Seleciona a lista de usuários filtrados do estado global
  const users = useSelector((state) => state.users.filteredUsers);
  // Seleciona o status da requisição de usuários do estado global
  const status = useSelector((state) => state.users.status);

  // Hook useEffect para despachar a ação de buscar usuários quando o componente é montado
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUsers()); // Despacha a ação fetchUsers se o status for 'idle'
    }
  }, [status, dispatch]); // Dependências do useEffect

  return (
    <div className="user-list bg-light-surface dark:bg-dark-surface p-6 rounded-lg shadow-md">
      {/* Título da lista de usuários */}
      <h2 className="text-2xl font-semibold mb-4 text-light-text dark:text-dark-text">Lista de Usuários</h2>
      <ul>
        {/* Mapeia cada usuário da lista de usuários para um item de lista */}
        {users.map((user) => (
          <li key={user.id} className="mb-2 p-2 border-b border-gray-300 dark:border-gray-600">
            {/* Exibe o nome do usuário */}
            <p className="text-light-text dark:text-dark-text"><strong>Nome:</strong> {user.name}</p>
            {/* Exibe o email do usuário */}
            <p className="text-light-text dark:text-dark-text"><strong>Email:</strong> {user.email}</p>
            {/* Exibe a cidade do usuário */}
            <p className="text-light-text dark:text-dark-text"><strong>Cidade:</strong> {user.address.city}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList; // Exporta o componente UserList como padrão
