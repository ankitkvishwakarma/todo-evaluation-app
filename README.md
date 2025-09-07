# React Todo App Enhancement

## 📌 Project Overview
This project enhances a basic React Todo application by adding **priority management** and **date-based filtering** features. The app allows users to create, manage, and filter tasks with improved UI clarity and flexibility.

---

## 🚀 Enhancements Implemented
- **TaskCard Component**
  - Displays task details with an attached **priority badge**.
  - Shows due date for each task.

- **PriorityBadge Component**
  - Customizable priority levels (`High`, `Medium`, `Low`).
  - Color-coded labels for easy identification.

- **FilterBar Component**
  - Provides filters for tasks:  
    - `All` – Show all tasks  
    - `Today` – Show tasks due today  
    - `Upcoming` – Show tasks with future due dates  
    - `Overdue` – Show tasks with past due dates  

- **State Management**
  - Implemented using React hooks (`useState`).
  - Filtering logic applied dynamically based on user selection.

- **Unit Tests**
  - Basic tests added using **React Testing Library**.
  - Verified rendering of components and filter buttons.

---

## 🛠 Tech Stack
- **React.js**
- **TailwindCSS** for styling
- **React Testing Library** & **Jest** for unit testing

---

## 📂 Project Structure

# React Todo Enhancement

## Features
- TaskCard enhanced with priority labels
- PriorityBadge component for customizable priority
- FilterBar component for date-based filters
- Basic unit tests
- Responsive UI with TailwindCSS

## Run the App
```bash
npm install
npm run dev

