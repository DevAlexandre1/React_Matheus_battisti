import componentsCar from componentsCar.module.css
const componentsCar = (modelo,valor,ano,novo) => {
return (
  <div>
        <h1 classeName="carStyle">{modelo}</h1>
        <h2 classeName="carStyle">Ano do veículo: {ano}</h2>
        <h2 classeName="carStyle">Valor do veículo: {valor}</h2>
        <h2 classeName="carStyle">Veiculo é novo? {novo}</h2>

    </div>
  )
}

export default componentsCar