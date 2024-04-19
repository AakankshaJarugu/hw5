import React, { useState } from 'react'
import { fetchData } from './controller/activity-controller';

function App() {
  const [data, setData] = useState(null);

  const onClick = async () => setData(await fetchData());

  return (
    <div className="card">

      {
        data && <span>{data.type}</span>
      }

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
