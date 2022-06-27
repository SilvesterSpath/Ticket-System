import { useState } from "react"
import { useSelector } from 'react-redux';

const NewTicket = () => {
  const { user } = useSelector(i => i.auth)
  const [name] = useState(user.name)
  const [email] = useState(user.email)
  const [product, setProduct] = useState('iPhone')
  const [description, setDescription] = useState('')

  const onSubmit = (e)=>{
    e.preventDefault()
  }
  

  console.log(name, email, product, description);
  return (
    <div>
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