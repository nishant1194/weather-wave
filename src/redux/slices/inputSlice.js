
import { createSlice } from '@reduxjs/toolkit';


const inputSlice = createSlice({
    name: 'input',
    initialState: {
    value: "Delhi",
    },
    reducers: {
        updateString: (state, action) => {
          state.value = action.payload;
        },
      },
})

export const { updateString } = inputSlice.actions;

export default inputSlice.reducer;
