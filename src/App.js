import Calc from "./components/calc";
import Request from "./components/request";

function App() {

    return (
        <div className={'flex flex-row'}>
            <Calc/>
            <Request/>
        </div>
    )
}

export default App;