import React from "react";
import {addPostActionCreator, onChangePostActionCreator} from "../../redux/profile-reducer";
import ProfileInfo from "./ProfileInfo";



export default function ProfileInfoContainer(props) {



    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let ChangePost = (text) => {
        props.dispatch(onChangePostActionCreator(text));
    }

    return (
        <ProfileInfo addPost={addPost} ChangePost={ChangePost} newPostText={props.newPostText}/>
    )

}