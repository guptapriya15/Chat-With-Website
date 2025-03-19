document.addEventListener("DOMContentLoaded", () => {
  // Get the currently active tab
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const currentTabUrl = tabs[0].url; // Get the URL of the active tab
    document.getElementById("urlInput").value = currentTabUrl; // Set the input value to the current tab's URL
  });

  // Add event listener to the button
  document.getElementById("redirectBtn").addEventListener("click", () => {
    const urlInput = document.getElementById("urlInput").value;
    if (urlInput) {
      // Open a new tab and redirect to localhost:3000/entered_url
      chrome.tabs.create({ url: `http://localhost:3000/${urlInput}` });
    } else {
      alert("Please enter a valid URL.");
    }
  });
});
