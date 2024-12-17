// src/components/Controls.js
import React, { useState } from "react";
import Recorder from "./Recorder";
import Playback from "./Playback";
import SearchBox from "./SearchBox";

const Controls = () => {
  const [events, setEvents] = useState([]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Record and Playback</h1>
      <SearchBox />
      <Recorder setEvents={setEvents} />
      <Playback events={events} />
      <div>
        <h3>Recorded Events:</h3>
        <pre>{JSON.stringify(events, null, 2)}</pre>
      </div>
    </div>
  );
};

export default Controls;
