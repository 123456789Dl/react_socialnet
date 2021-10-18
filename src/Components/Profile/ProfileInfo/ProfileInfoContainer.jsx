import React from "react";
import {addPostActionCreator, onChangePostActionCreator} from "../../redux/profile-reducer";
import ProfileInfo from "./ProfileInfo";
import {connect} from "react-redux";


/*
export default function ProfileInfoContainer(props)

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let ChangePost = (text) => {
        props.store.dispatch(onChangePostActionCreator(text));
    }

    return (
        <ProfileInfo addPost={addPost} ChangePost={ChangePost}
                     newPostText={props.store.getState().profilePage.newPostText}/>
    )
*/

let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => dispatch(addPostActionCreator()),
        ChangePost: (text) => dispatch(onChangePostActionCreator(text))
    }
}

const ProfileInfoContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileInfo)


export default ProfileInfoContainer