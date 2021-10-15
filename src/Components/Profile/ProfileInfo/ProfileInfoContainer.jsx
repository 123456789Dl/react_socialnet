import React from "react";
import {addPostActionCreator, onChangePostActionCreator} from "../../redux/profile-reducer";
import ProfileInfo from "./ProfileInfo";



export default function ProfileInfoContainer(props) {

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let ChangePost = (text) => {
        props.store.dispatch(onChangePostActionCreator(text));
    }

    return (
        <ProfileInfo addPost={addPost} ChangePost={ChangePost} newPostText={props.store.getState().profilePage.newPostText}/>
    )

}