import React from 'react'
import My from './MyPost.module.css'
import Post from "./Post/Post";

const MyPost = () => {
    return (
        <div className={My.MainPart_posts}>
            <h2 className={My.MainPart_heading}>
                My posts
            </h2>
            <Post message='Hello world' like='21'/>
            <Post message='Its my first post' like='20'/>
            <Post message='Kak krasivaa' like='14'/>

        </div>
    )
}

export default MyPost;