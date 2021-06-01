import React from "react";
import M from "./MainPart.module.css"
import MyPost from "./MyPosts/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const MainPart = (props) => {
    return(
        <main>
            <ProfileInfo/>
            <MyPost posts={props.posts}/>
        </main>
    )
}

export default MainPart;