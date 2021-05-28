import React from "react";
import M from "./MainPart.module.css"
import MyPost from "./MyPosts/MyPost";

const MainPart = () => {
    return(
        <main className={M.MainPart}>
            <div className={M.MainPart_back}>
                <img src="https://www.tui.ru/getmedia/8605a712-8718-4d97-b1b6-61bf45b7797a/italy-visa-main" alt=""/>
            </div>
            <div className={M.MainPart_avatar}>
                <img src="https://rozetked.me/images/uploads/dwoilp3BVjlE.jpg" alt=""/>
            </div>
            <MyPost/>
        </main>
    )
}

export default MainPart;