import React from "react";
import P from "./ProfileInfo.module.css"
import {addPostActionCreator, onChangePostActionCreator} from "../../../redux/state";


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