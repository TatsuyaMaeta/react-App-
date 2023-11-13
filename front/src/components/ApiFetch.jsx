import React, { useEffect, useState } from "react";
import axios from "axios";
const ApiFetch = () => {
    const [posts, setPosts] = useState([]);
    const [id, setId] = useState(1);
    const [clicked, setClicked] = useState(false);

    const handlerClicked = () => {
        setClicked(!clicked);
    };

    useEffect(() => {
        // axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
        //     // 取得した結果をsetPostsに格納する
        //     setPosts(res.data);
        // });

        // fetchだとhtmlでデータが来るので.json()で一度処理する必要がある
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((data) => {
                setPosts(data);
            });

        // 最初だけ実行されればいいので、第2引数にからの配列を入れる
    }, [clicked]);

    return (
        <div>
            <input
                type="text"
                value={id}
                onChange={(evt) => setId(evt.target.value)}
            />{" "}
            <br />
            <button type="button" onClick={handlerClicked}>
                Get Post
            </button>
            <br />
            {posts.title}
            {/* <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul> */}
        </div>
    );
};

export default ApiFetch;
