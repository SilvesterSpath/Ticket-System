import { useState } from 'react'
import {FaSignInAlt} from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const { email, password} = formData

  const onChange = (e)=>{
    setFormData((prev)=>({
      ...prev,
      [e.target.name]: e.target.value
    }))
    
  }  

  const onSubmit = (e) => {
    e.preventDefault();  
      
    
  }
  
  return (
    <>
     <section className="heading">
      <h1>
        <FaSignInAlt /> Login
      </h1>
      <p>Sign in to get support</p>
     </section>

     <section className="form">
      <form onSubmit={onSubmit}>

        <div className="form-group">
          <input type="email" id='email' className="form-control" value={email} name='email' onChange={onChange} placeholder='Enter your email' required/>
        </div>
        <div className="form-group">
          <input type="password" id='password' className="form-control" value={password} name='password' onChange={onChange} placeholder='Enter your password' required/>
        </div>

        <div className="form-group">
          <button className="btn btn-block">Submit</button>          
        </div>        
      </form>
      <ToastContainer />      
     </section>
    </>
  )
}

export default Login