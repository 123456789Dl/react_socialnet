import React from "react";
import M from "./MainPart.module.css"
import MyPost from "./MyPosts/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";



const MainPart = (props) => {
    return(
        <main>
            <MyPost posts={props.store.getState().profilePage.postsData}/>
            <ProfileInfoContainer store={props.store}/>
        </main>
    )
}

export default MainPart;