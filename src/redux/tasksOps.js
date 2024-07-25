
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://62584f320c918296a49543e7.mockapi.io';

export const fetchTasks = createAsyncThunk('tasks/getAll', async (_, thunkAPI) => {
  //те що поверне ця ф-ція буде в payload 
  try {
    const response = await axios.get('/tasks');
  return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
});

export const addTask = createAsyncThunk('tasks/addTask', async (newTask, thunkAPI) => {
  try {
   const response = await axios.post('tasks', newTask);
    return response.data; 
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
  
});

export const deleteTask = createAsyncThunk('tasks/deleteTask', async (taskId, thunkAPI) => {
  try {
    const response = await axios.delete(`tasks/${taskId}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})
