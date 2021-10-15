import React from 'react'
import My from './MyPost.module.css'
import Post from "./Post/Post";
import P from "../ProfileInfo/ProfileInfo.module.css";

const MyPost = (props) => {

    let postsElements = props.posts.map((el) => {
        return (<Post message={el.post} like={el.likes}/>)
    })

    return (
        <div>
            <div className={P.MainPart_back}>
                <img src="https://cdn.pixabay.com/photo/2021/08/17/14/48/sea-6553205_960_720.jpg" alt=""/>
            </div>
            <div className={My.MainPart_posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPost;