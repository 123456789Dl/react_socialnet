import React from "react";
import P from "./ProfileInfo.module.css"
import {addPostActionCreator, onChangePostActionCreator} from "../../redux/profile-reducer";



export default function ProfileInfo(props) {

    let newPostEvent = React.createRef();

    let onAddPost = () => {
        props.addPost()
    }

    let onChangePost = () => {
        let text = newPostEvent.current.value;
        props.ChangePost(text)
    }

    return (
        <div>
            <div className={P.MainPart_button}>
                <textarea ref={newPostEvent} value={props.newPostText} onChange={onChangePost}></textarea>
                <button onClick={onAddPost}>Add post</button>
            </div>
        </div>
    )
}