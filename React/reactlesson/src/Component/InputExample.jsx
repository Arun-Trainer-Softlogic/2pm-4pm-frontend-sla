import React, { useState } from 'react'

function InputExample() {
    const [name, setName] = useState("")
    const [age, setAge] = useState(25);

    return (
        <div>
            <input type="text" 
        placeholder='Enter name '
        onChange= {(e) => setName(e.target.value) }
        />




            <h3>  {name}</h3>
            <h3>{age}</h3>

            <button onClick={()=> setAge (age+1) }>Increase Age </button>
        </div>
    )
}

export default InputExample