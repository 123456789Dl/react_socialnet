import React from "react";
import New from "./New/New";

export default function NewsPosts(props) {

    let newsPostsData = props.newsData.map((el) => {
        return (<New message={el.newsText} data={el.data}/>)}
    )

    return (
        <div>
            <div>
            {newsPostsData}
            </div>
        </div>
    )
}