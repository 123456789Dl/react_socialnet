import React from 'react'
import P from './Post.module.css'

const   Post = (props) => {
    return (
        <div className={P.MainPart_post}>
            <div className={P.MainPart_avatar}>
                <img src="https://rozetked.me/images/uploads/dwoilp3BVjlE.jpg" alt=""/>
            </div>
            <div>
                {props.message}
            </div>
            <div>
                Likes {props.like}
            </div>
        </div>
    )
}

export default Post;