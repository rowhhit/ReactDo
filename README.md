
## 📋 **Project Overview**

**Objective:**  
Develop a creative and feature-rich To-Do application using **React** and **Vite** that allows users to manage tasks efficiently with functionalities like adding, updating, deleting tasks, setting reminders, categorization, search & filter, and user customization.

---

## 🚀 **Key Features**

1. **Add Task**
   - Input new tasks with details like name, category, priority, and deadline.
   - Automatically records the time the task was added.
   - Displays the user's name at the top-right after input.

2. **Update Task**
   - Mark tasks as completed.
   - Edit task details including name, category, priority, and deadline.
   - Completed tasks are visually distinguished (e.g., strikethrough).

3. **Delete Task**
   - Remove tasks from the active list.
   - Deleted tasks are moved to a "Recycle Bin" for temporary storage and possible recovery.

4. **Task Counter**
   - Live display of the total number of tasks.
   - Shows counts for pending and completed tasks in real-time.

5. **Reminders**
   - Set deadlines for tasks.
   - Receive browser notifications as reminders when deadlines approach.

6. **Categorization**
   - Assign categories to tasks (e.g., Work, Personal, Urgent).
   - Filter tasks based on selected categories.

7. **Search & Filter**
   - Search bar to find tasks by keywords.
   - Filter tasks by status (All, Pending, Completed) and category.

8. **User Customization**
   - Toggle between light and dark modes.
   - Customize task colors based on priority levels (Low, Medium, High).

9. **Data Persistence**
   - Store tasks and user data in `localStorage` to maintain state across sessions.

10. **Recycle Bin**
    - View and restore deleted tasks.
    - Option to permanently clear all deleted tasks.

---

## 🛠️ **Libraries & Tools Used**

1. **React**
   - Frontend library for building user interfaces with reusable components.

2. **Vite**
   - Fast and modern build tool for frontend development, offering quick setup and hot module replacement.

3. **React Router DOM**
   - Manages client-side routing, enabling navigation between the main To-Do list and the Recycle Bin.

4. **UUID**
   - Generates unique IDs for each task to ensure consistent identification.

5. **React Icons (optional)**
   - Provides a collection of customizable icons to enhance the UI (not explicitly used in the provided code but commonly integrated).

6. **React Toastify**
   - Displays toast notifications for user actions like adding or deleting tasks (optional based on initial description).

---

## 📂 **Project Structure**

```
todo-app/
├── public/
├── src/
│   ├── components/
│   │   ├── AddTask.jsx
│   │   ├── TaskList.jsx
│   │   ├── TaskItem.jsx
│   │   ├── RecycleBin.jsx
│   │   ├── Header.jsx
│   │   ├── SearchBar.jsx
│   │   ├── TaskCounter.jsx
│   │   ├── ThemeToggle.jsx
│   │   └── Reminders.jsx
│   ├── contexts/
│   │   └── TaskContext.jsx
│   ├── styles/
│   │   └── styles.css
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── vite.config.js
```

---

## 📝 **Feature Implementation Details**

### 1. **User Authentication & Name Input**
- **Component:** `Header.jsx`
- **Functionality:**
  - Prompts the user to enter their name on the first visit.
  - Saves the name in `localStorage` for persistence.
  - Displays the name at the top-right of the app.

### 2. **Task Management**
- **Context:** `TaskContext.jsx`
  - Manages global state for tasks and deleted tasks.
  - Provides functions to add, update, delete, restore, and clear tasks.
  - Utilizes `localStorage` for data persistence.

- **Adding Tasks:**
  - **Component:** `AddTask.jsx`
  - **Functionality:**
    - Form to input task name, category, priority, and deadline.
    - On submission, creates a new task with a unique ID and current timestamp.
    - Adds the task to the global task list via context.

- **Updating Tasks:**
  - **Component:** `TaskItem.jsx`
  - **Functionality:**
    - Allows marking tasks as completed.
    - Provides an edit mode to update task details.
    - Updates the task state in the context.

- **Deleting Tasks & Recycle Bin:**
  - **Component:** `TaskItem.jsx` (Delete Function)
    - Moves the task to the Recycle Bin instead of immediate deletion.
  - **Component:** `RecycleBin.jsx`
    - Lists all deleted tasks.
    - Allows restoring individual tasks or clearing all deleted tasks.

### 3. **Task Counter**
- **Component:** `TaskCounter.jsx`
- **Functionality:**
  - Displays the number of pending and completed tasks.
  - Updates in real-time as tasks are added, completed, or deleted.

### 4. **Reminders**
- **Component:** `Reminders.jsx`
- **Functionality:**
  - Requests notification permissions from the user.
  - Checks for tasks with deadlines approaching (e.g., within the next hour).
  - Sends browser notifications as reminders.

### 5. **Categorization**
- **Component:** `AddTask.jsx` & `TaskList.jsx`
- **Functionality:**
  - Users assign categories to tasks when adding them.
  - `TaskList.jsx` includes filters to display tasks based on selected categories.

### 6. **Search & Filter**
- **Component:** `SearchBar.jsx` & `TaskList.jsx`
- **Functionality:**
  - `SearchBar.jsx` allows users to input keywords to search for tasks.
  - `TaskList.jsx` filters tasks based on search input, status (All, Pending, Completed), and category.

### 7. **User Customization**
- **Component:** `ThemeToggle.jsx` & CSS Styling
- **Functionality:**
  - `ThemeToggle.jsx` allows users to switch between light and dark modes.
  - CSS variables manage theme colors, which are toggled by updating the `data-theme` attribute.
  - Task priority colors are customized using CSS classes (`low`, `medium`, `high`).

### 8. **Data Persistence**
- **Implementation:** `TaskContext.jsx`
- **Functionality:**
  - Uses `localStorage` to save and retrieve tasks, deleted tasks, and user name.
  - Ensures data remains intact across browser sessions and reloads.

---

## 📚 **Libraries Explained**

1. **React**
   - **Purpose:** Building dynamic and interactive user interfaces using components.
   - **Usage:** Core framework for developing the app's frontend.

2. **Vite**
   - **Purpose:** Fast development server and build tool optimized for modern frontend projects.
   - **Usage:** Bootstraps the React project with rapid hot module replacement for efficient development.

3. **React Router DOM**
   - **Purpose:** Enables client-side routing in React applications.
   - **Usage:** Manages navigation between the main To-Do list and the Recycle Bin without page reloads.

4. **UUID**
   - **Purpose:** Generates unique identifiers.
   - **Usage:** Assigns unique IDs to each task to ensure consistent identification and manipulation.

5. **React Toastify (Optional)**
   - **Purpose:** Displays customizable toast notifications.
   - **Usage:** Provides user feedback for actions like adding or deleting tasks (can be integrated as needed).

---

## 🎨 **Styling Overview**

- **CSS Variables:**  
  Utilizes CSS variables for theming (light/dark modes) and task priority colors.
  
- **Responsive Design:**  
  Implements media queries to ensure the app is mobile-friendly and adapts to different screen sizes.

- **Component-Specific Styles:**  
  Each component has associated styles to maintain a clean and organized UI.

---

## 🔧 **Running the Project**

1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
   cd todo-app
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Start the Development Server:**
   ```bash
   npm run dev
   ```
   - Access the app at `http://localhost:5173/` (default Vite port).

4. **Build for Production:**
   ```bash
   npm run build
   ```
   - Generates optimized production-ready files in the `dist` folder.

---

## 🛠️ **Additional Enhancements (Future Work)**

- **Backend Integration:**
  - Implement a backend (e.g., Firebase, Node.js) for user authentication and data storage.
  - Enable multi-device synchronization.

- **Advanced Notifications:**
  - Integrate with services like Push API or external notification services for reliable reminders.

- **Enhanced UI/UX:**
  - Utilize UI libraries like Tailwind CSS or Material-UI for more sophisticated designs.
  - Add animations and transitions for better user experience.

- **Testing:**
  - Incorporate unit and integration tests using tools like Jest and React Testing Library to ensure app reliability.

- **Accessibility:**
  - Ensure the app is accessible to all users by following ARIA guidelines and implementing keyboard navigation.

---

## 📧 **Contact**

For any queries or support, please feel free to reach out to me at [bharitrowhit@gmail.com](mailto:bharitrowhit@gmail.com).

---

## 📌 **Summary**

Your React with Vite To-Do App is a robust task management tool featuring:

- **User-Friendly Interface:** Easy task addition, editing, and deletion with real-time updates.
- **Customization:** Light/dark themes and priority-based color coding enhance usability.
- **Efficiency:** Search, filter, and categorization streamline task management.
- **Reliability:** Data persistence ensures users' tasks are always saved.
- **Advanced Features:** Reminders and a Recycle Bin add extra layers of functionality.

By leveraging modern tools and libraries, the app offers a seamless and efficient user experience, making task management both simple and effective.

---

Feel free to reach out if you need further clarification or assistance with specific parts of the project!
