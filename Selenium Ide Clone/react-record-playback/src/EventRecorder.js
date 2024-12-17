import React from "react";

const EventRecorder = () => {
  const startRecording = () => {
    // Send a message to the content script to start recording events
    chrome.runtime.sendMessage({
      type: "start-recording",
    });
  };

  const stopRecording = () => {
    // Send a message to stop recording events
    chrome.runtime.sendMessage({
      type: "stop-recording",
    });
  };

  return (
    <div>
      <button onClick={startRecording}>Start Recording</button>
      <button onClick={stopRecording}>Stop Recording</button>
    </div>
  );
};

export default EventRecorder;
