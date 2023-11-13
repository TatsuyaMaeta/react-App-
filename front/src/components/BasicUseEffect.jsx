import React, { useEffect, useState } from "react";

const BasicUseEffect = () => {
    const [count, setCount] = useState(0);

    // レンダリングが走るたびにその後に実行される
    // ボタンがクリックされてレンダリングされるたびに実行される
    // useEffect(() => {
    //     console.log("useEffect invoked");
    // });

    // 初回の読み込みした時だけ実行したいときは、第2引数で空の配列を指定する
    // useEffect(() => {
    //     console.log("useEffect invoked");
    // },[]);

    // stateを第2引数で指定した場合、その引数の時のみ実行される
    // 反応して欲しいstateを入れる
    const [item, setItem] = useState("");
    useEffect(() => {
        console.log("useEffect invoked");
    },[count]);

    return (
        <div>
            <button onClick={() => setCount((prevCount) => prevCount + 1)}>
                Click {count}
            </button>
            <input
                type="text"
                value={item}
                id="item_input"
                onChange={(evt) => setItem(evt.target.value)}
            />
        </div>
    );
};

export default BasicUseEffect;
