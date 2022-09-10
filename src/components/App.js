import { ThemeProvider } from '@material-tailwind/react';
import '../styles/App.css';
import RoutesLink from './Routes';

function App() {
  return (
    <ThemeProvider className="App">
      <RoutesLink />
    </ThemeProvider>
  );
}

export default App;
