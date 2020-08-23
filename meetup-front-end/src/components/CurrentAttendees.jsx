import React, { useState } from 'react';

const CurrentAttendees = ({attendee}) => (
  // YOUR CODE HERE
  // const [beginner, setbeginner] = useState('');
  // const [intermediate, setintermediate] = useState('');
  // const [beginner, setbeginner] = useState('');

  // if (person.skillLevel === 'beginner') {
  //   setbeginner
  // }

  <div>
    {attendee.map((person) => {
      return (
        <div id='app'>
          <h2>Attendees</h2>
          <h3>Beginner</h3>
          <div class="attendees">{person.firstName}{person.lastName}</div>
          <h3>Intermediate</h3>
          <div class="attendees">{person.firstName}{person.lastName}</div>
          <h3>Expert</h3>
          <div class="attendees">{person.firstName}{person.lastName}</div>
        </div>
      )
    })}
  </div>
)

export default CurrentAttendees;