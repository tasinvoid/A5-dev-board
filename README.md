### 📋 Dev Board

**Dev Board** is a task management dashboard designed for developers. It offers a clean, user-friendly interface to help you organize tasks, track progress, and stay updated on your daily activities. This project demonstrates core web development concepts, including DOM manipulation and dynamic content generation, all styled with a modern, responsive design.

---

### ✨ Features

* **Task Management:** 📝 The main dashboard displays assigned tasks in a card-based layout, each with a title, a brief description, a deadline, and a "Completed" button.
* **Dynamic UI Updates:** 🔄 When you mark a task as completed, the UI updates in real time. The task counter increases, the assigned task number decreases, and the button is disabled to prevent re-submission.
* **Activity Log:** 🕰️ A dedicated sidebar tracks all completed tasks with a timestamp, providing a history of your progress. The log can be cleared with a single click.
* **Theme Switcher:** 🎨 Personalize your workspace with a theme button that randomly changes the background color of the page.
* **Blogs Page:** 📚 A separate page provides a simple Q&A format on key web development topics like DOM selection methods, event delegation, and event bubbling.
* **Back Navigation:** 🔙 A "Back to Desk" button on the blogs page allows for smooth navigation back to the main dashboard.

---

### 🛠️ Technologies Used

* **HTML:** The project's structure is built with semantic HTML.
* **CSS:** The layout and styling are handled with **Tailwind CSS**, a utility-first CSS framework. A small amount of custom CSS is included for specific fonts and gradients.
* **JavaScript:** The core interactivity is powered by vanilla JavaScript, using event listeners and DOM manipulation to create a dynamic and responsive user experience.

### 💡 How It Works

The project consists of two main pages: `index.html` (the main dashboard) and `main.html` (the blogs page).

* `js.js`: This file contains the logic for the main dashboard. It handles all event listeners for the task cards, the clear history button, and the theme switcher. It also includes functions for updating task counts and generating dynamic content for the activity log.
* `main.js`: This file handles the navigation for the blogs page. It contains a single event listener on the "Back to Desk" button to redirect the user to `index.html`.
* **Event Delegation:** To handle the "Completed" buttons on all the task cards efficiently, the `js.js` file uses event delegation. A single event listener is attached to the parent `cards-container` element instead of to each individual button. This is a best practice for managing events on a large number of dynamic elements.
