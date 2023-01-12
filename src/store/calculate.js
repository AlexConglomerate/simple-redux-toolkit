import {createSlice} from "@reduxjs/toolkit";

const initialState = {count: 0} // задаём начальное состояние

// прописываем алгоритм: при каком action как менять состояние
const calcSlice = createSlice({
    name: 'count', // первое слово в названии action + '/'
    initialState,
    reducers: {
        increment(state, action) { // increment - это название action
            state.count += action.payload
            return state // без этого в некоторых случаях не сработает
        },
        decrement(state, action) {
            state.count -= action.payload
        },
    }
})

// достаём из слайса все actions и reducer
const {actions, reducer: calcReducer} = calcSlice
const {increment, decrement} = actions


// в других компонентах мы будем вызывать эти функции через dispatch, и таким образом изменять state
// будем вызывать так: dispatch(actionCountIncremented(123))
export const actionCountIncremented = number => increment(number)
export const actionCountDecremented = number => decrement(number)

//
// // Dispatch и getState забираем из middleware thunk
// // это чистая функция, а значит мы можем реализовать её в каком угодно файле
// // т.к. мы передаём функцию, то мы можем реализовать этот функционал в другом файле
// export const actionCountIncrementedClosures = number => dispatch => {
//     dispatch(increment(number))
// //     Можем добавить функционал
// }

// прописываем функцию, через которую будем считывать state
export const getCount = () => state => state.calc.count


export default calcReducer