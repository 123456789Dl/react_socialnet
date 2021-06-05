import React from "react";
import P from "./ProfileInfo.module.css"


export default function ProfileInfo(props) {

    let newPostEvent = React.createRef();

    let addPost = () => {
        let objPost = {
            // a: newPostEvent.current.value,
            type: "ADD-POST"
        }
        props.dispatch(objPost);
    }

    let onChangePost = () => {
        let changePost = {
            postText: newPostEvent.current.value,
            type: "UPDATE-POST-TEXT"
        }
        props.dispatch(changePost);
    }

    return (
        <div>
            <div className={P.MainPart_back}>
                <img src="https://www.tui.ru/getmedia/8605a712-8718-4d97-b1b6-61bf45b7797a/italy-visa-main" alt=""/>
            </div>
            <div className={P.MainPart_button}>
                <textarea ref={newPostEvent} value={props.newPostText} onChange={onChangePost}></textarea>
                <button onClick={addPost}>Add post</button>
            </div>
        </div>
    )
}