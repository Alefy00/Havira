import { useState } from 'react'; // Importa o hook useState do React
import { useDispatch } from 'react-redux'; // Importa o hook useDispatch do react-redux
import { addUser } from '../redux/usersSlice'; // Importa a ação addUser do slice de usuários

const UserForm = () => {
  // Define estados locais para os campos do formulário
  const [name, setName] = useState(''); 
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');

  const dispatch = useDispatch(); // Obtém a função dispatch para enviar ações ao redux

  // Função que lida com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Previne o comportamento padrão de recarregar a página
    // Cria um novo usuário com os dados do formulário
    const newUser = {
      id: Date.now(), // Gera um ID único baseado na data/hora atual
      name,
      email,
      address: {
        city,
        geo: {
          lat,
          lng,
        },
      },
    };
    // Envia a ação addUser com o novo usuário como payload
    dispatch(addUser(newUser));
    // Reseta os campos do formulário
    setName('');
    setEmail('');
    setCity('');
    setLat('');
    setLng('');
  };

  return (
    <div className="user-form bg-light-surface dark:bg-dark-surface p-6 rounded-lg shadow-md mb-4">
      {/* Título do formulário */}
      <h2 className="text-2xl font-semibold mb-4 text-light-text dark:text-dark-text">Adicionar Usuário</h2>
      {/* Início do formulário */}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          {/* Campo de input para o nome */}
          <label className="block text-light-text dark:text-dark-text mb-2" htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)} // Atualiza o estado name ao digitar
          />
        </div>
        <div className="mb-4">
          {/* Campo de input para o email */}
          <label className="block text-light-text dark:text-dark-text mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Atualiza o estado email ao digitar
          />
        </div>
        <div className="mb-4">
          {/* Campo de input para a cidade */}
          <label className="block text-light-text dark:text-dark-text mb-2" htmlFor="city">Cidade</label>
          <input
            type="text"
            id="city"
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md"
            value={city}
            onChange={(e) => setCity(e.target.value)} // Atualiza o estado city ao digitar
          />
        </div>
        <div className="mb-4">
          {/* Campo de input para a latitude */}
          <label className="block text-light-text dark:text-dark-text mb-2" htmlFor="lat">Latitude</label>
          <input
            type="text"
            id="lat"
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md"
            value={lat}
            onChange={(e) => setLat(e.target.value)} // Atualiza o estado lat ao digitar
          />
        </div>
        <div className="mb-4">
          {/* Campo de input para a longitude */}
          <label className="block text-light-text dark:text-dark-text mb-2" htmlFor="lng">Longitude</label>
          <input
            type="text"
            id="lng"
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md"
            value={lng}
            onChange={(e) => setLng(e.target.value)} // Atualiza o estado lng ao digitar
          />
        </div>
        {/* Botão para submeter o formulário */}
        <button type="submit" className="bg-secondary dark:bg-secondary-dark text-white px-4 py-2 mt-4 rounded-md">
          Adicionar
        </button>
      </form>
    </div>
  );
};

export default UserForm; // Exporta o componente UserForm como padrão
