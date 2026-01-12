import React from 'react'

function ClickExample() {
    function showMessage(){
        alert("Button Clicked ")
    }


  return (
    <div>
        <button onClick={showMessage}>click me man</button>
    </div>
  )
}

export default ClickExample