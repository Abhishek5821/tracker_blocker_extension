chrome.runtime.onInstalled.addListener(() => {
  console.log("✅ Tracker Blocker is installed and running.");
});

chrome.runtime.onStartup.addListener(() => {
  console.log("🔁 Tracker Blocker started with the browser.");
});
