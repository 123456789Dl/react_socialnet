import React from "react";
import M from "./MainPart.module.css"

const MainPart = () => {
    return(
        <main className={M.MainPart}>
            <div className={M.MainPart_back}>
                <img src="https://www.tui.ru/getmedia/8605a712-8718-4d97-b1b6-61bf45b7797a/italy-visa-main" alt=""/>
            </div>
            <div className={M.MainPart_avatar}>
                <img src="https://rozetked.me/images/uploads/dwoilp3BVjlE.jpg" alt=""/>
            </div>
            <div className={M.MainPart_posts}>
                <h2 className={M.MainPart_heading}>
                    My posts
                </h2>
                <div className={M.MainPart_post1}>
                    New post
                </div>
                <div className={M.MainPart_post2}>
                    post 1
                </div>
                <div className={M.MainPart_post3}>
                    post 2
                </div>
            </div>
        </main>
    )
}

export default MainPart;