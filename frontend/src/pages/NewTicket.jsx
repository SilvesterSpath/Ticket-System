import { useState, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import { createTicket, reset } from "../features/tickets/ticketSlice";
import Spinner from '../components/Spinner'
import BackButton from '../components/BackButton'

const NewTicket = () => {
  const { user } = useSelector(i => i.auth)
  const { isLoading, isError, isSuccess, message} = useSelector(i => i.ticket)
  const [name] = useState(user.name)
  const [email] = useState(user.email)
  const [product, setProduct] = useState('iPhone')
  const [description, setDescription] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(()=>{
    if(isError){
      toast.error(message)
    }

    if(isSuccess){
      dispatch(reset())
      navigate('/tickets')
    }

    dispatch(reset())
  }, [isError, isSuccess, dispatch, navigate, message])

  const onSubmit = (e)=>{
    e.preventDefault()
    dispatch(createTicket({product, description}))
  }
  

  console.log(name, email, product, description);

  if(isLoading){
    return <Spinner />
  }

  return (
    <div>
      <BackButton url='/'/>
      <section className="heading">
        <h1>Create new Ticket</h1>
        <p>Please fill out the form below</p>
      </section>

      <section className="form">
        <div className="form-group">
          <label htmlFor="name">Customer Name</label>
          <input type="text" className="form-control" value={name} disabled />
        </div>
        <div className="form-group">
          <label htmlFor="email">Customer Email</label>
          <input type="text" className="form-control" value={email} disabled />
        </div>

        <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="product">Product</label>
          <select name="product" id="product" value={product} onChange={(e)=> setProduct(e.target.value)}>
            <option value="iPhone">iPhone</option>
            <option value="MacBook Pro">MacBook Pro</option>
            <option value="iPad">iPad</option>
            <option value="iMac">iMac</option>
          </select>
          </div>
          <div className="form-group">
          <label htmlFor="description">Description of the issue</label>
          <textarea  id="description" className="form-control" value={description} name='description' placeholder="Description" onChange={(e)=>{
            setDescription(e.target.value)
          }}/>
            <div className="form-group">
              <button className="btn btn-block">
                Submit
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  )
}

export default NewTicket