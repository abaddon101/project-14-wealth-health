// src/features/userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  name: string | null;
}

const initialState: UserState = {
  name: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

  },
});

// export const { } = userSlice.actions;
export default userSlice.reducer;
