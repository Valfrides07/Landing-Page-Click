💖 Click-A-Phrase: Interactive Quotes

🌟 Project Overview

This project is a minimalist and interactive Landing Page developed to display quotes in an engaging way. With every tap or click on the screen, a new quote is randomly loaded from an internal database, providing a simple yet captivating user experience.

The initial focus is on Romantic category quotes, but the structure is already prepared to support multiple categories (motivational, funny, etc.).

✨ Features

• Click Interactivity: The displayed quote is changed with every user click or tap on the screen.

• Minimalist Design: Black background (#000) and white text (#fff) for maximum contrast and focus on the message.

• Centering: The text is centered on the screen using Flexbox for a clean presentation.

• Dynamic Content: Uses a JavaScript Array to store and manage the quotes.

• Random Selection: A JavaScript function ensures the next quote is chosen randomly.

• Category Structure: The code is designed for easy expansion to different quote categories.

🛠️ Technologies Used

The project is built using the fundamental web technologies:

Technology    Purpose
HTML5:        Basic page structure, containing only the main quote display element.
CSS3:         Styling, centering, and application of the high-contrast theme.
JavaScript:   Interaction logic (click event), quote array management, and random selection.




📁 File Structure

The project follows a simple and straightforward structure:

Plain Text
.
├── index.html
├── style.css
└── script.js


File:          Description
index.html:    Contains the HTML structure, including the large div id="frase".
style.css:     Defines the visual style, such as the black background, white text, font size, and centering.
script.js:     Contains the quote array, the random selection logic, and the click event handler.




🚀 How to Run Locally

To view and test the project on your machine:

1. Clone the repository:

Bash
git clone repository
cd click-a-phrase

2. Open the file: Simply open the index.html file in your preferred browser.

3. Interact: Click anywhere on the screen to start seeing the quotes.

✅ Development Checklist

Below is the original project checklist, with the completion status:

Project Overview

Area: Structure
Task: Create folder, index.html, style.css, script.js
Status: ✅ Completed

Area: HTML
Task: Create large, centered <div id="frase"></div>
Status: ✅ Completed

Area: CSS
Task: Black body, white text, large font, centering with flexbox
Status: ✅ Completed

Area: CSS
Task: Smooth fade-in animation for the quote
Status: ⚠️ Pending

Area: JavaScript
Task: Quote array, random selection function, click event
Status: ✅ Completed

Area: JavaScript
Task: Add small animation on quote change
Status: ✅ Completed

Area: General
Task: Version with categories (romantic, motivational, etc.)
Status: ✅ Completed



The next step in development is to focus on implementing the smooth fade-in animation in the CSS to enhance the user experience.




Author: Manus AI (Based on user specifications) License: [Choose your license, e.g., MIT]

