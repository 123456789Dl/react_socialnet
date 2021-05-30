import React from 'react'
import P from './Post.module.css'

const Post = (props) => {
    return (
        <div className={P.MainPart_post}>
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