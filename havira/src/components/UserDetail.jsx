/* eslint-disable react/prop-types */ // Desabilita a regra de prop-types do ESLint

// Componente funcional UserDetail que recebe o usuário como prop
const UserDetail = ({ user }) => {
  return (
    <div className="user-detail bg-white p-4 rounded shadow-md mb-4">
      {/* Título da seção de detalhes do usuário */}
      <h2 className="text-xl font-bold mb-4">Detalhes do Usuário</h2>
      {/* Exibe as infomações do usuário */}
      <p><strong>Nome:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Cidade:</strong> {user.address.city}</p>
      <p><strong>Latitude:</strong> {user.address.geo.lat}</p>
      <p><strong>Longitude:</strong> {user.address.geo.lng}</p>
    </div>
  );
};

export default UserDetail; // Exporta o componente UserDetail como padrão
