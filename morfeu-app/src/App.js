import './App.css';
import ButtonHome from './components/ButtonHome';
import imghome from './imgs/HomePageButton.jpg'

function App() {
  return (
    
       <div className="App">
        <div className="container">          
          <header><p>Header</p>          
              <h1>home Page</h1>  
          </header>
          <main><p>Main</p>
          </main>
          <footer>            
            <div>
                <ButtonHome/>
                <img src></img>
            </div>          
          </footer>
        </div>      
    </div>
    
  );
}

export default App;
