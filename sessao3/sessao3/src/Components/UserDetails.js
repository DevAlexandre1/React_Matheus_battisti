function UserDetails({nome,idade,profissao}) {
  return (
   
    <div>
       <h2>{nome}</h2>
       <p>Idade: {idade}</p>
       <p>Profissão: {profissao}</p>
        {idade < 18 ? (<p>Não pode tirar carteira</p>):(<p>Pode tirar carteira</p>)}
    </div>
  )
}

export default UserDetails