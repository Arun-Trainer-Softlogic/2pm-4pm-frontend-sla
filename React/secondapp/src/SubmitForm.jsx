import React, { useState } from 'react'

function SubmitForm() {
   const [username , setUsername] = useState()

   function handleSubmit (e){
    e.preventDefault(); 
    alert("submitted : " + username)


   }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input name='user' value={username} 
        onChange={(e)=> setUsername(e.target.value) }/>

        <button type='submit'>Submit</button>

        </form>
        
    </div>
  )
}

export default SubmitForm