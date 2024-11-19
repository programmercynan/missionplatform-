import React from 'react';
import { events } from '../mockData'; // Import mock data

const EventCalendar = () => {
  return (
    <div>
      <h2>Event Calendar</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <strong>{event.date}:</strong> {event.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventCalendar;
