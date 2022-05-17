import './App.css';
import MyComponents from './Components/MyComponents';
import UserDetails from './Components/UserDetails';

function App() {

  const Pessoas = [
    {id:1, nome:"Alex", idade:20,  profissao:"Analista de software"},
    {id:2, nome:"Maicon", idade:30,  profissao:"Padeiro"},
    {id:3, nome:"Andre", idade:15,  profissao:"Musico"}
  ];

  return (
    <div className="App">
    <MyComponents />


      {Pessoas.map((Pessoas)=>(
        <UserDetails key={Pessoas.id} nome={Pessoas.nome} idade={Pessoas.idade} profissao={Pessoas.profissao}/> ))}    
     
    </div>
  );
}

export default App;
