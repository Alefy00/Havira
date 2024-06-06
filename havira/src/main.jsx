import ReactDOM from 'react-dom/client'; // Importa o ReactDOM para renderizar a aplicação
import { Provider } from 'react-redux'; // Importa o Provider do react-redux para fornecer a store Redux à aplicação
import store from './redux/store'; // Importa a store Redux criada
import App from './App'; // Importa o componente principal da aplicação
import 'leaflet/dist/leaflet.css'; // Importa os estilos CSS da biblioteca Leaflet
import './styles/index.css'; // Importa os estilos CSS personalizados da aplicação

// Renderiza a aplicação na raiz do documento HTML usando ReactDOM.createRoot
ReactDOM.createRoot(document.getElementById('root')).render(
  // Fornece a store Redux à aplicação usando o Provider do react-redux
  <Provider store={store}>
    <App />
  </Provider>
);
