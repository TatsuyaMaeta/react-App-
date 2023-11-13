import React, { useContext } from "react";
import AppContext from "../contexts/AppContext";

const C = () => {
    // useContextを使うことでBを飛ばしてAから(親[App]から孫[C]へ)値を取得できる
    const value = useContext(AppContext);
    return (
        <div>
            <h3>C</h3>
            {value}
        </div>
    );
};

export default C;
