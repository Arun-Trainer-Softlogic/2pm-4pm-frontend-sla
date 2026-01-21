import React from 'react'
import { useState, useEffect } from 'react'

function ClickLoop() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log("UserEffect Ran ");
        
        setCount(prev => prev + 1)
    }, [])
    return <h2>count : {count}</h2>
}


export default ClickLoop