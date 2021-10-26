import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setUsersAC, unfollowAC} from "../redux/users-reducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        lengthOfPage: state.usersPage.lengthOfPage,
        selectedPage: state.usersPage.selectedPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        followToPerson: (userid) => {
            dispatch(followAC(userid))
        },
        unfollowToPerson: (userid) => {
            dispatch(unfollowAC(userid))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (curPage) => {
            dispatch(setCurrentPageAC(curPage))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)