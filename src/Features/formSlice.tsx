// formSlice.ts

// Import necessary modules from Redux Toolkit
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the shape of the form state
export interface FormState {
  firstName: string;
  lastName: string;
  dateOfBirth: number;
  startDate: number;
  street: string;
  city: string;
  stateCountry: string;
  zipCode: string;
  departments: string;
}

// Define the initial state for the form slice
const initialState: FormState = {
  firstName: "",
  lastName: "",
  dateOfBirth: 0,
  startDate: 0,
  street: "",
  city: "",
  stateCountry: "",
  zipCode: "",
  departments: "",
};

// Create the form slice using createSlice from Redux Toolkit
const formSlice = createSlice({
  name: "form", // Name of the slice
  initialState, // Initial state for the slice
  reducers: {
    // Reducer to update a specific field in the form state
    updateField: (
      state,
      action: PayloadAction<{ field: string; value: string }>
    ) => {
      // Extract the field and value from the action payload and update the state
      const { field, value } = action.payload;
      return { ...state, [field]: value };
    },
    // Reducer to reset the form state to its initial values
    resetForm: (state) => initialState,
  },
});

// Export the action creators and reducer
export const { updateField, resetForm } = formSlice.actions; // Action creators for updating a field and resetting the form
export default formSlice.reducer; // Reducer for handling state changes related to the form
