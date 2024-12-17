import React, { useEffect, useState } from "react";
import EventRecorder from "./EventRecorder";
import EventList from "./EventList";

const App = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Ensure chrome is available (it will not be in normal React development environment)
    if (typeof chrome !== "undefined" && chrome.runtime) {
      chrome.runtime.onMessage.addListener((message) => {
        if (message.type === "record-events") {
          setEvents((prevEvents) => [...prevEvents, message.data]);
        }
      });

      // Cleanup listener when component unmounts
      return () => {
        chrome.runtime.onMessage.removeListener();
      };
    }
  }, []);

  return (
    <div>
      <h1>Recorded Events</h1>
      <EventList events={events} />
      <EventRecorder />
    </div>
  );
};

export default App;
