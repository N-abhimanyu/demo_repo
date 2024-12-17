import React from "react";

const EventList = ({ events }) => {
  return (
    <div>
      <h2>Event List</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <strong>{event.type}</strong>: {event.tagName} (ID: {event.id || event.className})
            {event.value && <span> - Value: {event.value}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
