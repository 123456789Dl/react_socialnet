import React from 'react'
import My from './MyPost.module.css'
import Post from "./Post/Post";

const MyPost = (props) => {

    let postsElements = props.posts.map((el) => {
        return (<Post message={el.post} like={el.likes}/>)
    })

    return (
        <div className={My.MainPart_posts}>
            {/*<h2 className={My.MainPart_heading}>*/}
            {/*</h2>*/}
            {postsElements}
        </div>
    )
}

export default MyPost;