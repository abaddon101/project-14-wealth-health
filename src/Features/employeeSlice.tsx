// employeeSlice.ts

// Import necessary modules from Redux Toolkit
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the shape of the Employee object
export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  dateOfBirth: number;
  startDate: number;
  street: string;
  city: string;
  stateCountry: string;
  zipCode: string;
  departments: string;
  [key: string]: string | number; // Index signature to allow any string key
}

// Define the shape of the state managed by this slice
interface EmployeesState {
  list: Employee[];
}

// Define the initial state for the employees slice
const initialEmployeesState: EmployeesState = {
  list: [],
};

// Create the employees slice using createSlice from Redux Toolkit
const employeesSlice = createSlice({
  name: "employees", // Name of the slice
  initialState: initialEmployeesState, // Initial state for the slice
  reducers: {
    // Reducer to add an employee to the list
    addEmployee: (state, action: PayloadAction<Employee>) => {
      // Mutate the state by pushing the new employee to the list
      state.list.push(action.payload);
    },
    // Add other reducers if necessary
  },
});

// Export the action creators and reducer
export const { addEmployee } = employeesSlice.actions; // Action creator for adding an employee
export default employeesSlice.reducer; // Reducer for handling state changes related to employees
