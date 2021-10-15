import React from "react";
import NewsInfo from "./NewsInfo/NewsInfo";
import NewsPosts from "./NewsPosts/NewsPosts";

const MainPageNews = (props) => {

    return (
        <main>
            <NewsPosts newsData={props.store.newsPage.newsData}/>
            <NewsInfo dispatch={props.dispatch} newsPage={props.store.newsPage}/>
        </main>
    )

}

export default MainPageNews;