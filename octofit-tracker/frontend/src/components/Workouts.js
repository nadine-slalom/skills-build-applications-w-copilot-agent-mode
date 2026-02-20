import React, { useEffect, useState } from 'react';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch('https://$CODESPACE_NAME-8000.app.github.dev/api/workouts')
      .then(res => res.json())
      .then(data => setWorkouts(data));
  }, []);

  return (
    <div>
      <h2>Workouts</h2>
      <ul>
        {workouts.map(workout => (
          <li key={workout.id}>
            {workout.description} - {workout.calories} cal
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Workouts;
