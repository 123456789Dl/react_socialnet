import React from "react";
import New from "./New/New";
import {connect} from "react-redux";
import NewsPosts from "./NewsPosts";

let mapStateToProps = (state) => {
    return {
        newsData: state.newsPage.newsData
    }
}

const NewsPostsContainer = connect(mapStateToProps)(NewsPosts)

export default NewsPostsContainer