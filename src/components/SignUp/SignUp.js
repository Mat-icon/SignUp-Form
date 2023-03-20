import React, { useState } from "react";
import './Sign.css'
function SignUp() {
  const [form,setForm] = useState({
    password : '',
    email : '',
 })

  function handleClick(event){
    const {name, value} = event.target
    setForm(prevForm => {
        return {
            ...prevForm,
             [name] : value
        }
    })
}

  function handleSubmit(event){
    event.preventDefault()
    console.log(form)
}
  return (
    <div className="signup">
      <div className="sign-card">
        <form onSubmit={handleSubmit}>
        <input 
            className="sign-input"
            placeholder='Email'
            onChange={handleClick}
            type='email'
            name='email'
             value={form.email}
            />
          <input className="sign-input"
            type="password"
            placeholder="password"
            name="password"
            value={form.password}
            required
            onChange={handleClick}
          />
          <button>Click me</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;

           