import React from 'react'
import { useSelector } from 'react-redux'

const NoteItem = ({item}) => {
  const {user} = useSelector((state)=> state.auth)

  return (
    <>
        <div className='note' style={{
          backgroundColor: item.isStaff ? 'rgba(0,0,0,0.7)': '#fff',
          color: item.isStaff ? '#fff': '#000'
          }}>
            <h4>Note from {item.isStaff ? <span>Staff</span>: <span>{user.name}</span>}</h4>
           
          <div className='note-head'style={{
          
          color: item.isStaff ? '#000': '#aaa'
          }}>{item.text}</div>
          <div className='note-date'>{new Date(item.createdAt).toLocaleString('en-US')}</div>
        </div>
    </>      
  )
}

export default NoteItem