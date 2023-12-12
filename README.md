# Remede Agency: Migration from jQuery to React

Our internal application, HRnet https://github.com/OpenClassrooms-Student-Center/P12_Front-end , utilizes jQuery, leading to bugs and user complaints. This README outlines the comprehensive overhaul of HRnet from jQuery to React.

### Objectives:

1. Convert HRnet to React:

- Update "Create Employee" and "Employee List" pages with state management and consistent styling.

2. Convert jQuery Plugins to React:

- Choose one jQuery plugin (date picker, modal window, dropdowns, or tables) and convert its UI-related code to React components.
- Replace the remaining three plugins with React components.

### Project Structure:

1. HRNet Conversion:

- New "Create Employee" and "Employee List" pages in React.
- Implementation of state management.

2. Plugin Conversion:

- Selection of one jQuery plugin for conversion (date picker, modal window, dropdowns, or tables).
- Conversion of the plugin's UI-related code into React components.

3. React Components:

- EntriesPerPageDropdown.tsx: Component to select the number of entries per page in a list.
- SearchBar.tsx: Search bar component for filtering the list of employees.
- SortIcon.tsx: Component displaying an up or down arrow icon to indicate sorting direction.
- TableInfo.tsx: Component showing information about the table, such as the current display range and total number of entries.
- employeeSlice.ts: File containing the Employee object definition and state management related to employees using Redux.
- formSlice.ts: File containing the definition of an employee's form and state management related to the employee addition form using Redux.
- store.ts: File configuring the Redux store with form and employee reducers.
- CreateEmployee.tsx: Component for creating a new employee with a form.
- EmployeeList.tsx: Component displaying the list of employees, allowing sorting, pagination, and search.
- Home.tsx: Component representing the home page of the application.
- App.tsx: Main component using React Router to define the application's routes.

### Code Organization:

- Component files are organized into logical folders (Pages, Components/Table).
- Redux is used for global state management, with separate reducers for employees and the form.
- Components use Bootstrap features for styling and UI.
- The index.tsx file configures the Redux store and renders the application in the root of the DOM element using the ```js <Provider>```.

### Application Flow:
- User interacts with the form in the CreateEmployee component.
- Form data is stored in the Redux store via actions defined in formSlice.ts.
- Upon creating an employee, the data is added to the list of employees managed in the Redux store via actions defined in employeeSlice.ts.
- The EmployeeList component displays the list of employees, allowing sorting, pagination, and search with the help of Redux for managing global state.
- The Home page provides links to the main features of the application.
