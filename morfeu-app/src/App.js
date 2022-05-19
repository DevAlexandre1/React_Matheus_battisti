import './App.css';
import ButtonHome from './components/ButtonHome';
//import {useState, useEffect} from 'react'
import ButtonHome2 from './components/ButtonHome2';
import Renderizar from './components/Renderizar';


function App() {
  
  
  return (
    
       <div className="App">
        <div className="container">          
          <header><p>Header</p>          
              <h1>home Page</h1>  
          </header>
          <main>
            <h1>
              Eventos
            </h1>
            <ButtonHome/>
            <ButtonHome2/>
            
          </main>
          <footer>            
            <div>
              <Renderizar/>        
                    
            </div>          
          </footer>
        </div>      
    </div>
    
  );
}

export default App;
