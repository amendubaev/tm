import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppState } from '../store';

export interface TaskState {
  data: Response | null,
}

const initialState: TaskState  = {
  data: null,
}

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    setTaskData: (state, action: PayloadAction<Response>) => {
      state.data = action.payload;
    }
  },
})

export const { setTaskData } = taskSlice.actions

export const selectTaskData  = (state: AppState) => state.task.data;

export default taskSlice.reducer;

export const taskReducer = taskSlice.reducer;