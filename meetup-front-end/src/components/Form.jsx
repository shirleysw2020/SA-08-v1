import React, { useState } from 'react';

const Form = ({attendee, handleSubmit}) => {
  // YOUR CODE HERE
  // const [attendee, setAttendee] = useState({});
  return (
    <div>
    <form onSubmit={handleSubmit}>
    <input type="search" id="add-todo"   placeholder="name..." />
    </form>
    </div>
  )
}

export default Form;