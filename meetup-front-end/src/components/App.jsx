// import React from 'react';
import React, { useState, useEffect } from 'react';
// import db from '../../db.json';
import CurrentAttendees from './CurrentAttendees.jsx';
import axios from 'axios';
import Form from './Form.jsx';

const App = () => {
  // YOUR CODE HERE
  const [attendee, setAttendee] = useState([]); //[{}]
  // const [attendee, setAttendee] = useState(db); //[{}]

  useEffect(() => {
    axios.get('/attendees')
    .then((res) => {
      console.log(res.data, 'whats res')
      setAttendee(res.data)})
    .catch((err) => {console.log('error getting data')})
  }, [])

  const updateAttendeeInfo = ({firstAndLastName}) => {
    setAttendee(...attendee, {firstAndLastName});
  }

  const handleSubmit=() => {
    console.log('submitted!');
  }

  return (
    <div>
      <h1>JS Meetup</h1>
      <CurrentAttendees attendee={attendee}/>
      <Form updateAttendeeInfo={updateAttendeeInfo} handleSubmit={handleSubmit}/>
    </div>
  )
}

// function Example() {
//   // Declare a new state variable, which we'll call "count"
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }


export default App;
