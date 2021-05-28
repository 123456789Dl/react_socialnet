import React from 'react'
import My from './MyPost.module.css'
import Post from "./Post/Post";

const MyPost = () => {
    return (
        <div className={My.MainPart_posts}>
            <h2 className={My.MainPart_heading}>
                My posts
            </h2>
            <Post/>
            <Post/>
            <Post/>

        </div>
    )
}

export default MyPost;