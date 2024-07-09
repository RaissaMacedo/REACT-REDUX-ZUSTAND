import { configureStore } from "@reduxjs/toolkit";
import { useSelector, TypedUseSelectorHook } from 'react-redux'
import { player } from "./slices/player";

// state global
export const store = configureStore({
  // information to share in between components
  reducer: {
    player,
  }
})

export type RootState = ReturnType<typeof store.getState>
// typagem of useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector