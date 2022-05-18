import styles from './Car.module.css'

const Car = (x) => {
  return (
    <div className={styles.my_cars}>
     
        <h1>{x.modelo}</h1>        
        <h1>Valor: {x.valor}</h1>
        <h2>Ano:{x.ano}</h2>
        <h2>Carro novo: {x.novo ? "Sim": "Não"}</h2>       

    </div>
  )
}

export default Car