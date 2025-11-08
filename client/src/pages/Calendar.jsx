import React, { useState } from 'react';

export default function Calendar() {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ title: '', date: '', time: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleAddEvent = (e) => {
    e.preventDefault();
    if (newEvent.title && newEvent.date && newEvent.time) {
      setEvents([...events, newEvent]);
      setNewEvent({ title: '', date: '', time: '' });
    }
  };

  const getGoogleCalendarLink = (event) => {
    const { title, date, time } = event;
    const startDateTime = new Date(`${date}T${time}`).toISOString().replace(/-|:|\.\d\d\d/g, '');
    const endDateTime = new Date(new Date(`${date}T${time}`).getTime() + 60 * 60 * 1000).toISOString().replace(/-|:|\.\d\d\d/g, '');
    return `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startDateTime}/${endDateTime}`;
  };

  const getOutlookCalendarLink = (event) => {
    const { title, date, time } = event;
    const startDateTime = new Date(`${date}T${time}`).toISOString();
    const endDateTime = new Date(new Date(`${date}T${time}`).getTime() + 60 * 60 * 1000).toISOString();
    return `https://outlook.live.com/calendar/0/deeplink/compose?subject=${encodeURIComponent(title)}&startdt=${startDateTime}&enddt=${endDateTime}&body=`;
  };

  return (
    <div>
      <h1>Calendar</h1>
      <div className="calendar-container">
        <div className="calendar">
          <div className="calendar-header">
            <h2>November 2025</h2>
          </div>
          <div className="calendar-grid">
            {/* This is a simplified grid. A real implementation would be more complex. */}
            {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => (
              <div key={day} className="calendar-day">
                {day}
                {events
                  .filter((event) => new Date(event.date).getDate() + 1 === day)
                  .map((event, index) => (
                    <div key={index} className="event">
                      {event.title}
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
        <div className="event-form">
          <h3>Add New Event</h3>
          <form onSubmit={handleAddEvent}>
            <input
              type="text"
              name="title"
              placeholder="Event Title"
              value={newEvent.title}
              onChange={handleInputChange}
              required
            />
            <input
              type="date"
              name="date"
              value={newEvent.date}
              onChange={handleInputChange}
              required
            />
            <input
              type="time"
              name="time"
              value={newEvent.time}
              onChange={handleInputChange}
              required
            />
            <button type="submit">Add Event</button>
          </form>
        </div>
      </div>
      <div className="event-list">
        <h3>Events</h3>
        <ul>
          {events.map((event, index) => (
            <li key={index}>
              <strong>{event.title}</strong> - {event.date} @ {event.time}
              <a href={getGoogleCalendarLink(event)} target="_blank" rel="noopener noreferrer">
                <button>Add to Google Calendar</button>
              </a>
              <a href={getOutlookCalendarLink(event)} target="_blank" rel="noopener noreferrer">
                <button>Add to Outlook Calendar</button>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
