import React from 'react'
import {connect} from "react-redux";
import MyPost from "./MyPost";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postsData
    }
}

const MyPostContainer = connect(mapStateToProps)(MyPost)

export default MyPostContainer