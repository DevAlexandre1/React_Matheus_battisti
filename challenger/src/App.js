import './App.css';
import Car from './components/Car.js';

function App() {
  const MyCars = [
    {modelo:"Gol", valor: 28000, ano:2010, novo: true},
    {modelo:"Palio", valor: 65000, ano:2022, novo: true},
    {modelo:"Uno", valor: 18000, ano:2012, novo: false},
    ];

  return (
    <div className="App">
      <h1>Garagem</h1>
      <div>
        {MyCars.map((x)=>(
          <Car modelo={x.modelo} valor={x.valor} ano={x.ano} novo={x.novo}/>
        ))}
        
      </div>
    </div>
  );
}

export default App;
