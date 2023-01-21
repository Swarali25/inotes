import React from 'react'
import AddNotes from './AddNotes';

const Notes = (props) => {
  const {mode}=props
  return (
    <div className='container'>
        <AddNotes mode={mode}/>
    </div>

  )
}

export default Notes