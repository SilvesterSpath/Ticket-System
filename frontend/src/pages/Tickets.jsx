import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getTickets, reset } from "../features/tickets/ticketSlice"
import Spinner from '../components/Spinner'
import BackButton from '../components/BackButton'
import TicketItem from "../components/TicketItem"


const Tickets = () => {
  const {tickets, isLoading, isSuccess} = useSelector((state)=> state.tickets)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getTickets())

    return ()=>{
      if(isSuccess){
        dispatch(reset())
      }
    }
  },[dispatch, isSuccess])

  if(isLoading){
    return <Spinner />
  }

  return (
    <>
      <BackButton url='/'/>
      <h1>Tickets</h1>
      <div className="tickets">
        <div className="tickets-headings">
          <div>Date</div>
          <div>Product</div>
          <div>Status</div>
          <div></div>
        </div>
        {tickets.map((i)=>(
          <TicketItem key={i._id} ticket={i}/>
        ))}
      </div>
    </>
  )
}

export default Tickets