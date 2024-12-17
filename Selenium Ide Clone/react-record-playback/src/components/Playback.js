// src/components/Playback.js
import React from "react";

const Playback = ({ events }) => {
  const replayEvents = async () => {
    for (const event of events) {
      const element = document.querySelector(
        event.selector ? `.${event.selector}` : event.target
      );

      if (element) {
        if (event.type === "click") {
          element.click();
        } else if (event.type === "input") {
          element.value = event.value;
          element.dispatchEvent(new Event("input", { bubbles: true }));
        }
      }

      // Wait for a short delay to mimic real interaction
      await new Promise((resolve) => setTimeout(resolve, 500));
    }
  };

  return (
    <div>
      <button onClick={replayEvents}>Play Events</button>
    </div>
  );
};

export default Playback;
