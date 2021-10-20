import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {followAC, unfollowAC} from "../redux/users-reducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        followToPerson: (userid) => {
            dispatch(followAC(userid))
        },
        unfollowToPerson: (userid) => {
            dispatch(unfollowAC(userid))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)