import { configureStore, createSlice } from "@reduxjs/toolkit";
import { useSelector, TypedUseSelectorHook } from 'react-redux'
// piece smaller state 
const todoSlice = createSlice({
  name: 'todo',
  initialState: ['Fazer café', 'Estudar Redux'],

  reducers: {
    // action the user do at screen to alter state
    add: (state, action) => {
     state.push(action.payload.newTodo)
    },
  },
})

// state global
export const store = configureStore({
  // information to share in between components
  reducer: {
    todo: todoSlice.reducer,
  }
})

export const { add } = todoSlice.actions
export type RootState = ReturnType<typeof store.getState>
// typagem of useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector