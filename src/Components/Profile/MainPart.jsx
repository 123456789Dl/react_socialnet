import React from "react";
import M from "./MainPart.module.css"
import MyPost from "./MyPosts/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const MainPart = (props) => {
    return(
        <main>
            <ProfileInfo addPost={props.store.addPosts}
                         newPostText={props.store.state.profilePage.newPostText}
                         updatePostText={props.store.updatePostText}/>
            <MyPost posts={props.store.state.profilePage.postsData}/>
        </main>
    )
}

export default MainPart;