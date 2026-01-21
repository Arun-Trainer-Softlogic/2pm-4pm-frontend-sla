import React, { useState } from 'react'

function Loginform() {
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    city:""
  })

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  return (
    <div>
      <input type="email" name='email' value={formData.email}onChange={handleChange}/>
      <input type="password" name='password' value={formData.password} onChange={handleChange}/>

      <select name="city" value={formData.city} onChange={handleChange}>
        <option value="">Select city</option>
        <option value="Delhi">Delhi</option>
        <option value="Chennai">Chennai</option>
      </select>

      <p>{formData.email}</p>
      <p>{formData.password}</p>
      <p>{formData.city}</p>

    </div>
  )
}

export default Loginform