import {createSlice} from "@reduxjs/toolkit";
import {setErrorsetError} from "./errors";
import todosService from "../services/todos.service";

const initialState = {text: null, isLoading: false} // задаём начальное состояние

// прописываем алгоритм: при каком action как менять состояние
const requestSlice = createSlice({
    name: 'request', // первое слово в названии action + '/'
    initialState,
    reducers: {
        taskRequested(state) {
            state.isLoading = true;
            state.text = null
        },
        taskRequestedFinish(state, {payload}) {
            state.isLoading = false;
            state.text = payload
        },
        taskRequestFailed(state, action) {
            setErrorsetError(action.payload)
            state.isLoading = true;
            state.text = 'Error'
        },
    }
})

// Шаблоны всех actions
export const actionAsync = () => async (dispatch) => {
    try {
        dispatch(taskRequested())
        const data = await todosService.fetch()
        console.log(data)
        dispatch(taskRequestedFinish(data))
    } catch (error) {
        dispatch(setErrorsetError(error.message))
        dispatch(taskRequestFailed())
    }
}

export const getRequest = () => state => state.request

const {actions, reducer: requestReducer} = requestSlice
const {taskRequested, taskRequestFailed, taskRequestedFinish} = actions
export default requestReducer