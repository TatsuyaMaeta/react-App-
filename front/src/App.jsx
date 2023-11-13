import { useState } from "react";
import "./App.css";
// import Basic2 from './components/Basic2'
// import BasicUseEffect from "./components/BasicUseEffect";
import ApiFetch from "./components/ApiFetch";
import AppContext from "./contexts/AppContext";
import B from "./components/B";
import BasicReducer from "./components/BasicReducer";

import TimerContainer from "./components/TimerContainer";
import CompB from "./components/CompB";

import { useReducer } from "react";
import Memo from "./components/Memo";

// BasicReducerから丸々コピー
const initialState = 0;
const reducer = (currentState, action) => {
    switch (action) {
        case "add_1":
            return currentState + 1;
        case "multiple_3":
            return currentState * 3;
        case "reset":
            return initialState;
        default:
            return currentState;
    }
};

function App() {
    // const [count, setCount] = useState(0);
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider
            value={{ countProvided: count, dispatchProvided: dispatch }}
        >
            <div className="App">
                <h1>Vite + React</h1>
                {/* <Basic2/>
                <BasicUseEffect /> */}
                {/* <TimerContainer /> */}
                {/* <ApiFetch />
                <B />
                <BasicReducer /> */}
                {/* count {count}
                <CompB /> */}
                <Memo />
            </div>
        </AppContext.Provider>
    );
}

export default App;
