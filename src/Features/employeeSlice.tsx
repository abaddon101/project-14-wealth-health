// employeeSlice.ts
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
  zipCode: number;
  departments: string;
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
  name: "employees",
  initialState: initialEmployeesState,
  reducers: {
    // Reducer to add an employee to the list
    addEmployee: (state, action: PayloadAction<Employee>) => {
      state.list.push(action.payload);
    },
    // Add other reducers if necessary
  },
});

// Export the action creators and reducer
export const { addEmployee } = employeesSlice.actions;
export default employeesSlice.reducer;
