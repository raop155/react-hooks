import React, { useState, useContext } from 'react'
import NotesContext from '../context/notes-context'

const AddNoteForm = () => {
  const { dispatch } = useContext(NotesContext)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addNote = (e) => {
    e.preventDefault()
    dispatch({
      type: 'ADD_NOTE',
      title,
      body
    })
    setTitle('')
    setBody('')
  }

  return (
    <>
      <h2>Add Note</h2>
      <form onSubmit={addNote}>
        <label>Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <label>Body</label>
        <textarea value={body} onChange={(e) => setBody(e.target.value)} />
        <button>Add note</button>
      </form>
    </>
  )
}

export default AddNoteForm