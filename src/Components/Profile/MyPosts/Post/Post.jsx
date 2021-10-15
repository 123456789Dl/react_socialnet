import React from 'react'
import P from './Post.module.css'

const Post = (props) => {
    return (
        <div className={P.MainPart_post}>
            <div className={P.MainPart_avatar}>
                <img src="https://cdn.pixabay.com/photo/2017/07/20/02/03/cat-2520988_960_720.jpg" alt=""/>
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