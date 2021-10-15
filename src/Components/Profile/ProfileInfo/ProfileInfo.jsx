import React from "react";
import P from "./ProfileInfo.module.css"
import {addPostActionCreator, onChangePostActionCreator} from "../../redux/profile-reducer";



export default function ProfileInfo(props) {

    let newPostEvent = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onChangePost = () => {
        let text = newPostEvent.current.value;
        props.dispatch(onChangePostActionCreator(text));
    }

    return (
        <div>
            <div className={P.MainPart_button}>
                <textarea ref={newPostEvent} value={props.newPostText} onChange={onChangePost}></textarea>
                <button onClick={addPost}>Add post</button>
            </div>
        </div>
    )
}