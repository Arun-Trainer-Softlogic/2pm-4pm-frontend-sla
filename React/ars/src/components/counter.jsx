import { useSelector  , useDispatch } from "react-redux"
import {increment, decrement, incrementByAmount } from "../features/counter/counterSlice"




const counter = () => {
const count = useSelector((state) => state.counter.value);
const dispatch = useDispatch();
}

