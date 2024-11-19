import React from 'react';
import { sermons } from '../mockData'; // Import mock data

const SermonList = () => {
  return (
    <div>
      <h2>Recent Sermons</h2>
      <ul>
        {sermons.map((sermon) => (
          <li key={sermon.id}>
            <p>
              <strong>{sermon.title}</strong> by {sermon.speaker}
            </p>
            <button onClick={() => window.open(sermon.url, '_blank')}>
              Play
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SermonList;
