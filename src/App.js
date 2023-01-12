import {useDispatch, useSelector} from "react-redux";
import {
    actionCountDecremented,
    actionCountIncremented,
    getCount
} from "./store/calculate";

function App() {
    // dispatch нужен для изменения state
    const dispatch = useDispatch()

    // с помощью useSelector мы считываем нужные state
    // const isLoading = useSelector(state => state.calc.isLoading)
    // const error = useSelector(getError())

    const count = useSelector(getCount())
    // функция getCount() это «const getCount = () => state => state.calc.count».
    // Т.е. вместо «const count = useSelector(getCount())» можем написать
    // const count = useSelector(state => state.calc.count)


    // В функциях ниже вызываем dispatch, и передаём в него action. Тогда измениться state
    const handleIncrement = (i) => dispatch(actionCountIncremented(i))
    const handleDecrement = (i) => dispatch(actionCountDecremented(i))
    // const handleIncrementClosures = (i) => dispatch(actionCountIncrementedClosures(i))
    // const handleIncrementedError = (i) => dispatch(actionCountIncrementedError(i))
    // const handleActionAsync = () => dispatch(actionAsync())

    const headerClass = 'text-3xl hover:font-bold text-red-800 m-1'
    const buttonClass = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-60 m-1'

    // if (error) {
    //     return <h1>{error}</h1>
    // }
    // if (isLoading) {
    //     return <h1> Loading ...</h1>
    // }
    return (
    <div className="flex justify-center flex-col ">
        <h1 className={headerClass}> Count: {count} </h1>
        <button className={buttonClass} onClick={() => handleIncrement(1)}>increment</button>
        <button className={buttonClass} onClick={() => handleDecrement(1)}>decrement</button>
        <hr/>
        {/*<button className={buttonClass} onClick={() => handleIncrementClosures(1)}>increment + closures</button>*/}
        {/*<button className={buttonClass} onClick={() => handleIncrementedError(1)}>incremented + error</button>*/}
        {/*<button className={buttonClass} onClick={handleActionAsync}>Action async</button>*/}
    </div>
)
}

export default App;