import React from "react";
import Styles from "./users.module.css"
import * as axios from "axios";
import userPhoto from "../../icons/farmer.png"

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.selectedPage}&count=${this.props.lengthOfPage}`).then(response => {
            console.log(response.data.items)
            this.props.setUsers(response.data.items)
        })
    }

    onPageChanged = (curPage) =>
    {
        this.props.setCurrentPage(curPage)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${curPage}&count=${this.props.lengthOfPage}`).then(response => {
                console.log(response.data.items)
                this.props.setUsers(response.data.items)
            })
    }


    render() {
        let pagesData = []
        let pagesCounter = Math.ceil(this.props.totalCount / this.props.lengthOfPage)
        for(let i =  1; i <= pagesCounter; i++) {
             pagesData.push(i)
        }

        return <div>
            {
                this.props.users.map(el => <div>
                        <div className={Styles.wrapper_user}>
                            <div>
                                <div>
                                    <img
                                        src={el.photos.small != null ? el.photos.small : userPhoto}
                                        className={Styles.avatar}/>
                                </div>
                                {el.followStatus
                                    ? <button onClick={() => this.props.unfollowToPerson(el.id)}>Unfollow</button>
                                    : <button onClick={() => this.props.followToPerson(el.id)}>Follow</button>
                                }
                            </div>
                            <div className={Styles.main_content}>
                                <div>{el.name}</div>
                                <div>{el.status}</div>
                                <div>{"el.location.country"}</div>
                                <div>{"el.location.city"}</div>
                            </div>
                        </div>
                    </div>
                )
            }
            <div className={Styles.page_number_line}>
                {pagesData.map(el => {
                    return <span className={this.props.selectedPage === el && Styles.selectedPage }
                                 onClick={() => this.onPageChanged(el) }>{el} </span>
                })}
            </div>
        </div>
    }
}


export default Users