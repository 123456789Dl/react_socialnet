import React from "react";
import M from "./MainPart.module.css"
import MyPost from "./MyPosts/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";
import MyPostContainer from "./MyPosts/MyPostContainer";



const MainPart = (props) => {
    return(
        <main>
            <MyPostContainer/>
            <ProfileInfoContainer/>
        </main>
    )
}

export default MainPart;