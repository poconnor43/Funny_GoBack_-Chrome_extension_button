

document.getElementById('backButton').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.goBack(tabs[0].id);
    });
  });
  
  document.getElementById('forwardButton').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.goForward(tabs[0].id);
    });
  });

