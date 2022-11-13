
import { Navbar } from 'react-bootstrap';
import MiApi from './components/MiApi';

function App() {
  return (
    <div className='App'>
      <Navbar bg="dark"/>
      <h1 className="text-center mb-3">Personajes de Rick y Morty</h1>
      <MiApi/>
      </div>
  );
}

export default App;
