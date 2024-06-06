import { useState } from 'react'; // Importa o useState do React

// Componente ThemeToggle
const ThemeToggle = () => {
  // Define o estado do tema atual
  const [theme, setTheme] = useState('light'); // Começa com o tema light

  // Função para alternar entre os temas
  const toggleTheme = () => {
    const htmlElement = document.querySelector('html'); // Seleciona o elemento HTML
    const newTheme = theme === 'light' ? 'dark' : 'light'; // Alterna entre light e dark
    htmlElement.classList.toggle('dark', newTheme === 'dark'); // Altera a classe dark no elemento HTML
    localStorage.setItem('theme', newTheme); // Salva o novo tema no localStorage
    setTheme(newTheme); // Atualiza o estado do tema
  };

  // Texto do botão baseado no tema atual
  const buttonText = theme === 'light' ? 'Dark Mode' : 'Light Mode';

  return (
    // Botão para alternar entre os temas
    <button 
      onClick={toggleTheme} 
      className="bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 px-4 py-2 rounded-md focus:outline-none mb-4"
    >
      {buttonText}
    </button>
  );
};

export default ThemeToggle; // Exporta o componente ThemeToggle como padrão
