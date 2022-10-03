import { useState, useEffect } from 'react'
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { createNote } from "../features/notes/noteSlice"
import Modal from 'react-modal'

const customStyles = {
  content: {
    width: '600px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    position: 'relative',
  },
}

Modal.setAppElement('#root')

const NoteModal = ({setOpen}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [noteText, setNoteText] = useState('')

  const dispatch = useDispatch();
  const params = useParams();
  const {ticketId} = params;

  useEffect(()=>{
    setModalIsOpen(true)
  },[])

  // Close modal  
  const closeModal = ()=> {setModalIsOpen(false); setOpen(false)};

  // Create note submit
  const onNoteSubmit = (e) =>{
    e.preventDefault()    
    dispatch(createNote({
      noteText,
      ticketId
    }))
    closeModal()
  }

  return (
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel='Add note'>
          <h2>Add Note</h2>
          <button className="btn-close"onClick={closeModal}>X</button>
          <form onSubmit={onNoteSubmit}>
            <div className="form-group">
              <textarea name="noteText" id="noteText" className="form-control" placeholder="Note text" value={noteText} onChange={(e)=>setNoteText(e.target.value)}></textarea>
            </div>            
            <button className="btn" type="submit">Submit</button>            
          </form>
        </Modal>
  )
}

export default NoteModal