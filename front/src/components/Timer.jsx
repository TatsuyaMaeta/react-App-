import React, { useEffect, useState } from "react";

const Timer = () => {
    const [count, setCount] = useState(0);

    // こっちの関数は{}
    const time = () => {
        setCount((prevCount) => prevCount + 1);
    };

    useEffect(() => {
        const interval = setInterval(time, 1000);

        // 無効化された時にreturnの中身の処理が実行される
        return () => {
            // cleanup処理を書く
            clearInterval(interval);
            console.log("clear");
        };
    }, []);

    return <div>{count}</div>;
};

export default Timer;
