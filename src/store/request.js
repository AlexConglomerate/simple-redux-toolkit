import {createSlice} from "@reduxjs/toolkit";
import {setErrorsetError} from "./errors";
import todosService from "../services/todos.service";

const initialState = {isLoading: false} // задаём начальное состояние

// прописываем алгоритм: при каком action как менять состояние
const requestSlice = createSlice({
    name: 'request', // первое слово в названии action + '/'
    initialState,
    reducers: {
        taskRequested(state) {
            state.isLoading = true;
        },
        taskRequestedFinish(state) {
            state.isLoading = false;
        },
        taskRequestFailed(state, action) {
            setErrorsetError(action.payload)
            state.isLoading = true;
        },
    }
})

// Шаблоны всех actions
export const actionAsync = () => async dispatch => {
    try {
        dispatch(taskRequested())
        const data = await todosService.fetch()
        console.log(data)
        dispatch(taskRequestedFinish())
    } catch (error) {
        dispatch(setErrorsetError(error.message))
        dispatch(taskRequestFailed())
    }
}


const {actions, reducer: requestReducer} = requestSlice
const {taskRequested, taskRequestFailed, taskRequestedFinish} = actions
export default requestReducer