import React from 'react';
import logo from './logo.svg';
import './App.css';

import React, {useState, useEffect} from 'react';

function App() {
  const [dreams, setDreams] = useState(false);
  useEffect(() => {
    getDreams();
  }, []);
  function getDreams() {
    fetch('http://localhost:3001')
      .then(response => {
        return response.text();
      })
      .then(data => {
        setDreams(data);
      });
  }
  function createDream() {
    let name = prompt('Dreams');
    fetch('http://localhost:3001/dreams', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({title, content}),
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
        getDreams();
      });
  }
  function deleteDream() {
    let id = prompt('Enter task id');
    fetch(`http://localhost:3001/tasks/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
        getDreams();
      });
  }
  return (
    <div>
      {tasks ? tasks : 'There are no tasks available'}
      <br />
      <button onClick={createDream}>Add Dream</button>
      <br />
      <button onClick={deleteDream}>Delete Dream</button>
    </div>
  );
}
export default App;


