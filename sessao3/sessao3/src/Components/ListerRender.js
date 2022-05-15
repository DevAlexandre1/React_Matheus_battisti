import {useState} from 'react'

const ListerRender = () => {
    const [list]= useState(["Alexandre", "Mariana", "Vida"]);
  return (
    <div>
        <ul>
            {list.map((item)=>(
                <li>{item}</li>
            ))}
        </ul>
        
    </div>
  );
}

export default ListerRender;