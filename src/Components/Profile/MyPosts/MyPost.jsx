import React from 'react'
import My from './MyPost.module.css'
import Post from "./Post/Post";

const MyPost = () => {
    let postsData = [
        {id: 1, post: "Hello world", likes: 21},
        {id: 2, post: "It's my first post", likes: 20},
        {id: 3, post: "Kak krasivaa", likes: 14}
    ]


    return (
        <div className={My.MainPart_posts}>
            <h2 className={My.MainPart_heading}>
                My posts
            </h2>
            <Post message={postsData[0].post} like={postsData[0].likes}/>
            <Post message={postsData[1].post} like={postsData[1].likes}/>
            <Post message={postsData[2].post} like={postsData[2].likes}/>

        </div>
    )
}

export default MyPost;