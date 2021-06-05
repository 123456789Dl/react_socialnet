import React from "react";
import M from "./MainPart.module.css"
import MyPost from "./MyPosts/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const MainPart = (props) => {
    return(
        <main>
            <ProfileInfo dispatch={props.dispatch.bind(props.store)}
                         newPostText={props.store._state.profilePage.newPostText}/>
            <MyPost posts={props.store._state.profilePage.postsData}/>
        </main>
    )
}

export default MainPart;