import React from 'react';
/** 
 * SermonList Component
 * Displays a list of available sermons with play buttons.
 */

const SermonList = () => {
    // mock data for sermons
    const sermons = [
        { id: 1, title: 'Faith Over Fear', speaker: 'Pastor John', url: '#' },
        { id: 2, title: 'The Power of Prayer', speaker: 'Pastor Sarah', url: '#' },
        { id: 3, title: 'Walking in Grace', speaker: 'Pastor Tim', url: '#' },
    ];

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
                            play

                        </button>

                    </li>

                ))}
            </ul>
        </div>
    );
};

export default SermonList;