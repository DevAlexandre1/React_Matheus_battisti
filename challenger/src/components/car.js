
const Car = (carros) => {
  return (
    <div>
        <h1>{carros.modelo}</h1>
        <h2>{carros.valor}</h2>
        <h2>{carros.ano}</h2>
        <h2>{carros.novo}</h2>

    </div>
  )
}

export default Car