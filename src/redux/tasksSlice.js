import { createSlice } from '@reduxjs/toolkit';
import { addTask, deleteTask, fetchTasks } from './tasksOps';

const slice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder.addCase(fetchTasks.pending, (state) => {
      state.isLoading = true;
      state.error = false;
    }).
      addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload
      }).addCase(fetchTasks.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      }).addCase(addTask.pending, (state) => {
      state.isLoading = true;
      state.error = false;  
      }).addCase(addTask.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.isLoading = false;
      }).addCase(addTask.rejected, (state) => {
        state.isLoading = false;
        state.error = true;}).addCase(deleteTask.pending, (state) => {
      state.isLoading = true;
      state.error = false;  
      }).addCase(deleteTask.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload.id)
        state.isLoading = false;
      })
  }
})
export default slice.reducer;
