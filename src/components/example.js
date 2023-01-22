import {useDispatch} from "react-redux";
import todosService from "../services/todos.service";
import {createSlice} from "@reduxjs/toolkit";

function Example() {
    const dispatch = useDispatch()

    const requestSlice = createSlice({
        name: 'request',
        initialState: {text: null},
        reducers: {
            taskRequestedFinish(state, {payload}) {
                state.text = payload
            },
        }
    })

    const {actions} = requestSlice
    const {taskRequestedFinish} = actions

    export const actionAsync = () => async (dispatch) => {
        const data = await todosService.fetch()
        dispatch(taskRequestedFinish(data))
    }

    const handleRequest = () => dispatch(actionAsync())
    return (<button onClick={handleRequest}>request</button>)
}

export default Example;