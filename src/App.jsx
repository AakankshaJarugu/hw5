import React, { useState } from 'react'
import { fetchData } from './controller/activity-controller';

function App() {
  const [data, setData] = useState(null);
  const [activityType, setActivityType] = useState('');

  const onClick = async () => setData(await fetchData(activityType));

  const onChange = async (e) => {
    setActivityType(e.target.value);
  };

  return (
    <div className="card">

      <label htmlFor="type">
        Type in the type of activity you prefer below:
        <input type="text" id="type" onChange={onChange} />
      </label>

      {
        data &&
        !data.error &&
        <p>
          {data.activity}
        </p>
      }

      {
        data &&
        data.error &&
        <p className="not-found">
          {data.error}
        </p>
      }

      <button onClick={onClick}>
        Get Activity
      </button>
    </div>
  )
}

export default App
