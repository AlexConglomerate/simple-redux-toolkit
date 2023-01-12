import {useDispatch, useSelector} from "react-redux";
import {actionAsync, getRequest} from "../store/request";
import {getError} from "../store/errors";

function Request() {
    const dispatch = useDispatch()

    const {text, isLoading} = useSelector(getRequest())
    const error = useSelector(getError())
    const handleRequest = () => dispatch(actionAsync())

    const headerClass = 'text-3xl hover:font-bold text-red-800 m-1'
    const buttonClass = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-60 m-1'

    return (
        <div className="flex justify-center flex-col border rounded p-2 m-4 whitespace-normal">
            <h1 className={headerClass}> Request </h1>
            <button className={buttonClass} onClick={handleRequest}>request</button>

            <ul className="m-5 list-none md:list-disc">
                {Array.isArray(text) &&
                    text.map(i => (
                        <li className="my-2"> {i.title}</li>
                    ))}
            </ul>

            <h6>{isLoading && "Loading ..."}</h6>
            <h6>{error && `Error: ${error}`}</h6>

        </div>
    )
}

export default Request;