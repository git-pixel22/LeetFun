// Listen for messages from content script
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    // Check if the submission was accepted
    if (request.action === "acceptedSubmission") {
      // Open YouTube
      openYouTube();
    }
  });
  
  // Function to open YouTube
  function openYouTube() {
    var youtubeURL = 'https://www.youtube.com/watch?v=k-atPa3QUis';
    chrome.tabs.create({ url: youtubeURL });
  }
  
