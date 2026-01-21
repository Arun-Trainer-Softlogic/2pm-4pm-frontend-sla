import React, { useState } from 'react'

function NameForm() {

    const [name, setName] = useState("")



    return (

        <>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />


            <p>your name : {name}</p>
        </>



    )
}

export default NameForm