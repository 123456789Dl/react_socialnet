import React from "react";
import {connect} from "react-redux";
import {
    followToPerson, setCurrentPage,
    setUsers,toggleIsFetching,unfollowToPerson
} from "../redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";

class UsersApiComponent extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.selectedPage}&count=${this.props.lengthOfPage}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.toggleIsFetching(false)
            })
    }

    onPageChanged = (curPage) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(curPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${curPage}&count=${this.props.lengthOfPage}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalCount={this.props.totalCount}
                      lengthOfPage={this.props.lengthOfPage}
                      users={this.props.users}
                      selectedPage={this.props.selectedPage}
                      unfollowToPerson={this.props.unfollowToPerson}
                      followToPerson={this.props.followToPerson}
                      onPageChanged={this.onPageChanged}/>
            </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        lengthOfPage: state.usersPage.lengthOfPage,
        selectedPage: state.usersPage.selectedPage,
        isFetching: state.usersPage.isFetching
    }
}
/*
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
        },
        toggleIsFetching: (toggleFetching) => {
            dispatch(toggleIsFetchingAC(toggleFetching))
        }
    }
}*/

export default connect(mapStateToProps, {
    followToPerson,
    unfollowToPerson,
    setUsers,
    setCurrentPage,
    toggleIsFetching
})(UsersApiComponent)