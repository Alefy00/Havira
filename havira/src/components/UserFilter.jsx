import { useState } from 'react'; // Importa o hook useState do React
import { useDispatch } from 'react-redux'; // Importa o hook useDispatch do react-redux
import { filterUsers } from '../redux/usersSlice'; // Importa a ação filterUsers do slice de usuários

const UserFilter = () => {
  const [query, setQuery] = useState(''); // Define um estado local para a consulta de filtro
  const dispatch = useDispatch(); // Obtém a função dispatch para enviar ações ao redux

  // Função que lida com o clique no botão de filtrar
  const handleFilter = () => {
    dispatch(filterUsers(query)); // Despacha a ação filterUsers com a consulta atual
  };

  return (
    <div className="user-filter bg-light-surface dark:bg-dark-surface p-6 rounded-lg shadow-md mb-4">
      {/* Título do filtro de usuários */}
      <h2 className="text-2xl font-semibold mb-4 text-light-text dark:text-dark-text">Filtrar Usuários</h2>
      {/* Campo de entrada para a consulta de filtro */}
      <input
        type="text"
        placeholder="Filtrar usuários..."
        value={query} // Valor do campo de entrada é o estado query
        onChange={(e) => setQuery(e.target.value)} // Atualiza o estado query ao digitar
        className="border border-gray-300 dark:border-gray-600 p-2 rounded w-full mb-4 bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text"
      />
      {/* Botão para acionar a filtragem */}
      <button 
        onClick={handleFilter} 
        className="bg-secondary dark:bg-secondary-dark text-white p-2 rounded w-full"
      >
        Filtrar
      </button>
    </div>
  );
};

export default UserFilter; // Exporta o componente UserFilter como padrão