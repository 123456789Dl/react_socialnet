import React from "react";
import NewsInfoContainer from "./NewsInfo/NewsInfoContainer";
import NewsPostsContainer from "./NewsPosts/NewsPostsContainer";

const MainPageNews = () => {

    return (
        <main>
            <NewsPostsContainer/>
            <NewsInfoContainer/>
        </main>
    )

}

export default MainPageNews;