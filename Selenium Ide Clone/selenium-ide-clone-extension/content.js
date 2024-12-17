// Listen for page interactions, e.g., clicks
document.addEventListener("click", (event) => {
  chrome.runtime.sendMessage({
    type: "record-events",
    data: {
      type: "click",
      tagName: event.target.tagName,
      id: event.target.id,
      className: event.target.className,
      value: event.target.value,
    },
  });
});
