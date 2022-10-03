import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams, useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {FaPlus} from 'react-icons/fa'
import { getTicket, closeTicket } from "../features/tickets/ticketSlice"
import { getNotes, reset as noteReset } from "../features/notes/noteSlice"
import BackButton from "../components/BackButton"
import NoteItem from "../components/NoteItem"
import Spinner from "../components/Spinner"
import NoteModal from "./NoteModal"

const Ticket = () => {  
  const [modalIsOpen, setModalIsOpen] = useState(false)
  
  const {ticket, isLoading, isError, message} = useSelector((state) => (state.tickets))
  const {notes, isLoading: notesIsLoading} = useSelector((state) => (state.notes))

  const params = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {ticketId} = params  

  useEffect(()=>{        
    if(isError){
      toast.error(message)
    }
    dispatch(getTicket(ticketId))
    dispatch(getNotes(ticketId))
    return ()=>{
      dispatch(noteReset())
    }
  },[isError, message, ticketId, dispatch ])

  // Close ticket
  const onTicketClose = ()=>{
    dispatch(closeTicket(ticketId))
    toast.success('Ticket Closed')
    navigate('/tickets')
  }

  // Open
  const openModal = ()=> (setModalIsOpen(true));
  
  if(isLoading || notesIsLoading){
    return <Spinner/>
  }

  if(isError){
    return <h3>Something went wrong</h3>
  }

  return (
    <>     
      <div className="ticket-page">      
        <header className="ticket-header">
          <BackButton url={'/tickets'}/>
          <h2>
            Ticket ID: {ticket._id}
            <span className={`status status-${ticket.status}`}>{ticket.status}</span>
          </h2>
          <h3>
            Date Submitted: {new Date(ticket.createdAt).toLocaleString('en-US')}
          </h3>
          <h3>
            Product: {ticket.product}
          </h3>
          <hr />
          <div className="ticket-desc">
            <h3>Description of Issue</h3>
            <p>{ticket.description}</p>
          </div>
        </header>

        {ticket.status !== 'closed' && (
          <button className="btn" onClick={openModal}><FaPlus/>Add Note</button>
        )}

        {modalIsOpen && <NoteModal setOpen={setModalIsOpen}/>}
        {notes.map((item)=>(
         <NoteItem key={item._id} item={item}/>
        ))}
        {ticket.status !== 'closed' && (
          <button className="btn btn-block btn-danger" onClick={onTicketClose}>Close Ticket</button>
        )}        
      </div>
      <ToastContainer/>
    </>

  )
}

export default Ticket