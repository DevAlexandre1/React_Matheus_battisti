const ButtonHome = () => {
    let var1 = 0
    const eventoFirst = () =>{
        
        console.log("Evento 1")
        //console.log("Valor atual da variável é:", {var1})
      };
      
  return (
    <div>
        <div>
            <label>
                <input className="inp"></input>
            </label>            
        </div>    
            <button onClick={eventoFirst}>Clique aqui!</button>

    </div>
  )
}

export default ButtonHome