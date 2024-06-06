import { useState } from 'react'; // Importa o hook useState do React
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'; // Importa componentes do react-leaflet para mapas
import { useSelector } from 'react-redux'; // Importa o hook useSelector do react-redux
import UserDetail from './UserDetail'; // Importa o componente UserDetail
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Importando os ícones do Leaflet como módulos
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Configuração para corrigir o problema dos ícones
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const UserMap = () => {
  // Obtém a lista de usuários filtrados do estado global
  const users = useSelector((state) => state.users.filteredUsers);
  // Define um estado local para o usuário selecionado
  const [selectedUser, setSelectedUser] = useState(null);

  // Posição padrão do mapa (Londres)
  const defaultPosition = [51.505, -0.09];
  const zoomLevel = 2; // Nível de zoom inicial do mapa

  return (
    <div className="user-map bg-light-surface dark:bg-dark-surface p-6 rounded-lg shadow-md mb-4">
      {/* Título do mapa de usuários */}
      <h2 className="text-2xl font-semibold mb-4 text-light-text dark:text-dark-text">Mapa de Usuários</h2>
      {/* Container do mapa */}
      <MapContainer center={defaultPosition} zoom={zoomLevel} style={{ height: '400px', width: '100%' }}>
        {/* Camada de tiles do OpenStreetMap */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* Mapeia cada usuário para um marcador no mapa */}
        {users.map((user) => (
          <Marker
            key={user.id} // Chave única para cada marcador
            position={[user.address.geo.lat, user.address.geo.lng]} // Posição do marcador
            eventHandlers={{
              // Evento de clique no marcador
              click: () => {
                setSelectedUser(user); // Define o usuário selecionado no estado local
              },
            }}
          >
            {/* Exibe um popup com detalhes do usuário se o usuário estiver selecionado */}
            {selectedUser && selectedUser.id === user.id && (
              <Popup>
                <UserDetail user={selectedUser} /> {/* Componente que exibe detalhes do usuário */}
              </Popup>
            )}
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default UserMap; // Exporta o componente UserMap como padrão
