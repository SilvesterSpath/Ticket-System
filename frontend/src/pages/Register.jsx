import { useState } from 'react'
import {FaUser} from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useSelector, useDispatch } from 'react-redux'
import { register } from '../features/auth/authSlice'

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const {name, email, password, password2} = formData

  const dispatch = useDispatch()

  const {user, isLoading, isSuccess, message} = useSelector((state) => 
    (state.auth)
  )

  const onChange = (e)=>{
    setFormData((prev)=>({
      ...prev,
      [e.target.name]: e.target.value
    }))
    
  }  

  const onSubmit = (e) => {
    e.preventDefault();

    
    if (password !== password2) {
      toast.error('Passwords do not match');
    } else {
      const userData = {
        name,
        email,
        password        
      }

      dispatch(register(userData))
    }  
    
  }
  
  return (
    <>
     <section className="heading">
      <h1>
        <FaUser /> Register 
      </h1>
      <p>Please create an account</p>
     </section>

     <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input type="text" id='name' className="form-control" value={name} name='name' onChange={onChange} placeholder='Enter your name' required/>
        </div>
        <div className="form-group">
          <input type="email" id='email' className="form-control" value={email} name='email' onChange={onChange} placeholder='Enter your email' required/>
        </div>
        <div className="form-group">
          <input type="password" id='password' className="form-control" value={password} name='password' onChange={onChange} placeholder='Enter your password' required/>
        </div>
        <div className="form-group">
          <input type="password" id='password2' className="form-control" value={password2} name='password2' onChange={onChange} placeholder='Confirm your password' required/>
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

export default Register