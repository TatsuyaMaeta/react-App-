import React, { useState, useMemo } from "react";

const Memo = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const AddCount1 = () => {
        setCount1((prevCount1) => prevCount1 + 1);
    };
    const AddCount2 = () => {
        setCount2((prevCount2) => prevCount2 + 1);
    };

    // const isOdd = () => {
    //     let i = 0;
    //     while (i < 5000000000) i++;

    //     return count1 % 2 !== 0;
    // };

    // isOddの関数をuseMemoで囲うだけ
    // useMemoの戻り値は関数で無くなるので注意!!
    const isOdd = useMemo(() => {
        let i = 0;
        while (i < 5000000000) i++;

        return count1 % 2 !== 0;
    }, [count1]);

    return (
        <div>
            <button onClick={AddCount1}>Count1: {count1}</button>
            <br />
            <span>{isOdd ? "odd Number" : "even Number"}</span>
            <br />
            <button onClick={AddCount2}>Count2: {count2}</button>
        </div>
    );
};

export default Memo;
