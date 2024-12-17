// src/components/Recorder.js
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Recorder = ({ setEvents }) => {
  const [recording, setRecording] = useState(false);

  useEffect(() => {
    const handleEvent = (e) => {
      if (!recording) return;

      const eventDetails = {
        id: uuidv4(),
        type: e.type,
        target: e.target.tagName,
        selector: e.target.getAttribute("id") || e.target.getAttribute("class"),
        value: e.target.value || null,
        timestamp: Date.now(),
      };

      setEvents((prev) => [...prev, eventDetails]);
    };

    document.addEventListener("click", handleEvent);
    document.addEventListener("input", handleEvent);

    return () => {
      document.removeEventListener("click", handleEvent);
      document.removeEventListener("input", handleEvent);
    };
  }, [recording, setEvents]);

  return (
    <div>
      <button onClick={() => setRecording(true)}>Start Recording</button>
      <button onClick={() => setRecording(false)}>Stop Recording</button>
    </div>
  );
};

export default Recorder;
