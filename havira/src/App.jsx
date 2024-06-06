import { useEffect } from 'react'; // Importa o hook useEffect do React
import ThemeToggle from './components/ThemeToggle'; // Importa o componente ThemeToggle
import UserList from './components/UserList'; // Importa o componente UserList
import UserForm from './components/UserForm'; // Importa o componente UserForm
import UserMap from './components/UserMap'; // Importa o componente UserMap
import UserFilter from './components/UserFilter'; // Importa o componente UserFilter

// Componente funcional App
function App() {
  // Efeito colateral para verificar e aplicar o tema salvo no localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'; // Obtém o tema salvo no localStorage ou define como 'light' se não houver
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark'); // Adiciona a classe 'dark' ao elemento HTML se o tema salvo for 'dark'
    }
  }, []);

  return (
    // Estrutura da aplicação
    <div className="App p-28 bg-light-background dark:bg-dark-background min-h-screen">
      {/* Cabeçalho da aplicação */}
      <header className="App-header mb-4 text-center">
        <h1 className="text-4xl font-semibold mb-16 text-light-text dark:text-dark-text">Gerenciamento de Usuários</h1>
        {/* Componente ThemeToggle para alternar entre temas */}
        <ThemeToggle />
      </header>
      {/* Corpo principal da aplicação */}
      <main className="grid grid-cols-1 lg:grid-cols-1 gap-4">
        <div>
          {/* Componentes para adicionar e filtrar usuários */}
          <UserForm />
          <UserFilter />
          <UserList />
        </div>
        {/* Componente UserMap para visualizar usuários em um mapa */}
        <UserMap />
      </main>
    </div>
  );
}

export default App; // Exporta o componente App como padrão





