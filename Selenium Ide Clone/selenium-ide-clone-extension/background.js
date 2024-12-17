chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "start-recording") {
    console.log("Started recording events...");
    // You can add functionality here to start recording events or manage state
  }

  if (message.type === "stop-recording") {
    console.log("Stopped recording events...");
    // Add functionality to stop recording here
  }

  if (message.type === "record-events") {
    console.log("Event received:", message.data);
    // Store or process the event data
  }
});
