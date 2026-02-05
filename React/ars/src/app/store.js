import { configureStore } from '@redux/toolkit'



import counterReducer from '../features/counter/counterSlice'
import reducer from '../features/counter/counterSlice'

export const store = configureStore({
reducer : {
    counter : counterReducer
}
})