import React, { useEffect, useState } from "react";
import axios from "axios";
const ApiFetch = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
        //     // 取得した結果をsetPostsに格納する
        //     setPosts(res.data);

        // 最初だけ実行されればいいので、第2引数にからの配列を入れる
        // });

        // fetchだとhtmlでデータが来るので.json()で一度処理する必要がある
        fetch("https://jsonplaceholder.typicode.com/posts", { method: "GET" })
            .then((res) => res.json())
            .then((data) => {
                setPosts(data);
            });
    }, []);
    return (
        <div>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default ApiFetch;
