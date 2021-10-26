import React from 'react'
import P from './Post.module.css'
import userAvatar from "../../../../icons/farmer (girl).png"

const Post = (props) => {
    return (
        <div className={P.MainPart_post}>
            <div className={P.MainPart_avatar}>
                <img src={userAvatar}/>
            </div>
            <div className={P.MainPart_text}>
                <div>
                    {props.message}
                </div>
                <div>
                    Likes {props.like}
                </div>
            </div>
        </div>
    )
}

export default Post;