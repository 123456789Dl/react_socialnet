import React from "react";
import M from "./MainPart.module.css"
import MyPost from "./MyPosts/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";



const MainPart = (props) => {
    return(
        <main>
            <MyPost posts={props.store.profilePage.postsData}/>
            <ProfileInfoContainer dispatch={props.dispatch.bind(props.store)}
                         newPostText={props.store.profilePage.newPostText}/>
        </main>
    )
}

export default MainPart;