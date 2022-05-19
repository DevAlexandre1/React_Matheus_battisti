import './App.css';
import { useEffect, useState } from 'react';
const url = "http://localhost:3000/products"

function App() {
const [products, setProducts] = useState([]);

//1- resgatando dados

useEffect(async ()=>{
  const res = await fetch()
});
  return (
    <div className="App">
      <h1>List products</h1>
    </div>
  );
}

export default App;
