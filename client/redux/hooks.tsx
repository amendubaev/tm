import { useSelector } from "react-redux";
import { TypedUseSelectorHook, useDispatch } from "react-redux"
import { AppDispatch, AppState } from "./store"

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector