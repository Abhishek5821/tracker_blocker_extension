# Tracker Blocker Extension

A lightweight browser extension that blocks web trackers to protect your privacy and speed up browsing. It uses custom rulesets to identify and block tracking domains and scripts.

---

## Features

- Blocks common third-party trackers and analytics.
- Fast and efficient background blocking script.
- Simple popup UI to toggle blocking and check status.
- Customizable rules stored in `rules.json`.
- Compatible with Chromium-based browsers (Chrome, Edge, Brave).

---

## Installation

1. Clone or download this repository.

2. Open your browser’s Extensions page:

   - Chrome: `chrome://extensions`
   - Edge: `edge://extensions`

3. Enable **Developer mode**.

4. Click **Load unpacked** and select the `tracker-blocker-extension` folder.

5. The extension icon will appear in the toolbar.

---

## Usage

- Click the extension icon to open the popup.
- Toggle blocking on or off.
- The extension runs in the background blocking trackers based on included rules.
- To update blocking behavior, edit `rules.json` and reload the extension.

---

## Important: Metadata and Rulesets

The `_metadata/generated_indexed_rulesets/` folder contains essential blocking rules.  
**This folder must be included** in the repository and kept intact for the extension to work correctly.

---

## File Overview

- `manifest.json` — Extension configuration and permissions.  
- `background.js` — Core blocking logic running in the background.  
- `popup.html` & `popup.js` — User interface files for the popup.  
- `rules.json` — JSON file defining tracker blocking rules.  
- `styles.css` — Styling for the popup UI.  
- `_metadata/generated_indexed_rulesets/` — Required rulesets used at runtime.

---

## Development

- Make changes to scripts or rules as needed.
- Use browser developer tools to debug.
- Reload the unpacked extension after changes.

---

## Contributing

Contributions and suggestions are welcome. Please open issues or submit pull requests.

---

## License

[MIT License](LICENSE) (or your chosen license)

