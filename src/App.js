import Calc from "./components/calc";
import Request from "./components/request";

function App() {

    return (
        <div className={'flex flex-row'}>
            <Calc/>
            <Request/>
            <Request2/>
        </div>
    )
}

export default App;