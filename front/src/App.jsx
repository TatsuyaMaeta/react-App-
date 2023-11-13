import { useState } from "react";
import "./App.css";
// import Basic2 from './components/Basic2'
// import BasicUseEffect from "./components/BasicUseEffect";
import ApiFetch from "./components/ApiFetch";
import AppContext from "./contexts/AppContext";
import B from "./components/B";
import BasicReducer from "./components/BasicReducer";

import TimerContainer from "./components/TimerContainer";
function App() {
    const [count, setCount] = useState(0);

    return (
        <AppContext.Provider value={"value from App.jsx"}>
            <div className="App">
                <h1>Vite + React</h1>
                {/* <Basic2/>
                <BasicUseEffect /> */}
                {/* <TimerContainer /> */}
                <ApiFetch />
                <B />
                <BasicReducer />
            </div>

        </AppContext.Provider>
    );
}

export default App;
