// Show blocked count
chrome.action.getBadgeText({}, (text) => {
  document.getElementById("counter").innerText = text || "0";
});

// Add to whitelist
document.getElementById("whitelistBtn").addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const url = new URL(tab.url);
  const domain = url.hostname;

  chrome.storage.local.get("whitelist", (data) => {
    const whitelist = data.whitelist || [];
    if (!whitelist.includes(domain)) {
      whitelist.push(domain);
      chrome.storage.local.set({ whitelist }, () => {
        alert(`${domain} added to whitelist`);
      });
    } else {
      alert(`${domain} is already whitelisted`);
    }
  });
});
