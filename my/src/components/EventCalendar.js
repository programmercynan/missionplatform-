import React from 'react';

/** 
 * EventCalendar component
 * Renders a list of events in a simple calender-like format
 */

const EventCalendar = () => {
    // Mock data for events 
    const events = [
        { id: 1, date: '2024-11-20', title: 'Sunday Service' },
        { id: 2, date: '2024-11-25', title: 'Bible Study' },
        { id: 3, date: '2024-12-01', title: 'Youth Fellowship' },
    ];

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