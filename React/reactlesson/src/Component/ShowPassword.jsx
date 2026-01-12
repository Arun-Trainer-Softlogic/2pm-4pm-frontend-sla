import React, { useState } from 'react'

function ShowPassword() {
    const [show, setShow] = useState(false)


    return (
        <>
            <input
                type={show ? "text" : "password"}
                placeholder='Enter Password '
            />
            <br />
            <button onClick={() => setShow(!show)}>
                {show ? "Hide" : "show"} Password

            </button>

        </>
    )
}

export default ShowPassword