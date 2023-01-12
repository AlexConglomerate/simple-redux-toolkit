import {useDispatch, useSelector} from "react-redux";
import {actionCountDecremented, actionCountIncremented, getCount} from "../store/calculate";

function Calc() {
    const dispatch = useDispatch() // dispatch нужен для изменения state

    const count = useSelector(getCount())
    // функция getCount() это «const getCount = () => state => state.calc.count».
    // Альтернативный вариант => const count = useSelector(state => state.calc.count)

    // В функциях ниже вызываем dispatch, и передаём в него action. Тогда измениться state
    const handleIncrement = (i) => dispatch(actionCountIncremented(i))
    const handleDecrement = (i) => dispatch(actionCountDecremented(i))

    const headerClass = 'text-3xl hover:font-bold text-red-800 m-1'
    const buttonClass = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-60 m-1'

    return (
        <div className="flex justify-center flex-col border rounded p-2 m-4 w-min h-min">
            <h1 className={headerClass}> Count: {count} </h1>
            <button className={buttonClass} onClick={() => handleIncrement(1)}>increment</button>
            <button className={buttonClass} onClick={() => handleDecrement(1)}>decrement</button>
        </div>
    )
}

export default Calc;