import { createAsyncThunk } from "@reduxjs/toolkit"

const fetchUserById = userId => {
 return new Promise((resolve) => 
    setTimeout(() => resolve({
      id: 1, name: 'Sandwich'
    }), 1000)
  )
}


export const getUserById =
  createAsyncThunk('users/by-id',
    async (userId, thunkApi) => {
      try {
        const response = await fetchUserById(userId)
        return response
      } catch(e) {
        thunkApi.rejectWithValue(e)
      }
  });