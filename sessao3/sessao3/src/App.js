import './App.css';
import Sessao from './sessao';
import city from './assets/city.jpg';
import ListerRender from './Components/ListerRender';

function App() {
  return (
    <div className="App">
      <Sessao/>
      <img src="/img1.jpg" alt="img1" />
      <img src={city} alt="Cidade" />
      <ListerRender/>

    </div>
  );
}

export default App;
