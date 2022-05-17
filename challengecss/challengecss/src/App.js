import logo from './logo.svg';
import './App.css';
import componentsCar from './components/componentsCar.js';

function App() {
  
  const Carros = [
    { id:1,modelo:"Gol", valor: 28000, ano:2010, novo:false},
    {id:2, modelo:"Palio", valor: 65000, ano:2022, novo:true},
    {id:3, modelo:"Uno", valor: 18000, ano:2012, novo:false}
    ];
 
  return (
    <div className="App">
      {Carros.map((Carros)=>(
        <componentsCar keys={Carros.id} modelo={Carros.modelo} valor = {Carros.valor} ano={Carros.ano} novo={Carros.novo}/>
      ))}

    </div>
  );
}

export default App;
