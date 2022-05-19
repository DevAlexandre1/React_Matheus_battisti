const Renderizar = () => {
    const render =(x)=>{
        if(x > 10){
            return <h1>O valor é maior que 10, valor é {x}</h1>
        }else{
            return <h1>O valor é menor que 10, valor é {x}</h1>
        }
    }

  return (
    <div>
        {render(5)}
    </div>
  )
}

export default Renderizar