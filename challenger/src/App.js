import './App.css';
import car

function App() {
  const MyCars = [
    {modelo:"Gol", valor: 28000, ano:2010, novo:false},
    {modelo:"Palio", valor: 65000, ano:2022, novo:true},
    {modelo:"Uno", valor: 18000, ano:2012, novo:false},
    ];

  return (
    <div className="App">
      <h1>Garagem</h1>
      {MyCars.map((car)=>(
        <car 
      ))}
    </div>
  );
}

export default App;
