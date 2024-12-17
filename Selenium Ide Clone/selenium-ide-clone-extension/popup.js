document.getElementById("start-recording").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: "start" }, (response) => {
        console.log(response.status);
      });
    });
  
    document.getElementById("stop-recording").disabled = false;
    document.getElementById("start-recording").disabled = true;
  });
  
  document.getElementById("stop-recording").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: "stop" }, (response) => {
        console.log(response.status);
      });
    });
  
    document.getElementById("stop-recording").disabled = true;
    document.getElementById("start-recording").disabled = false;
  });
  