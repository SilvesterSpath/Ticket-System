import { useState, useEffect } from 'react'
import {FaSignInAlt} from 'react-icons/fa'
import {toast,  ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { login, reset } from '../features/auth/authSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const { email, password} = formData

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {user, isLoading, isSuccess, isError, message} = useSelector(state => state.auth)

  useEffect(()=>{
    if(isError){
      toast.error(message)
    }

    // Redirect when logged in
    if(isSuccess || user){
      navigate('/')
    }

    dispatch(reset)
  }, [isError, isSuccess, user, message, navigate, dispatch])

  const onChange = (e)=>{
    setFormData((prev)=>({
      ...prev,
      [e.target.name]: e.target.value
    }))
    
  }  

  const onSubmit = (e) => {
    e.preventDefault();
    
    const userData = {      
      email,
      password        
    }

    dispatch(login(userData))    
  }

  if(isLoading){
    return <Spinner/>
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