import React from "react";
import Styles from "./users.module.css"
import * as axios from "axios";

const Users = (props) => {
    const AddUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                console.log(response.data.items)
                props.setUsers(response.data.items)
            })
        }
    }
    return <div>
        <button onClick={AddUsers}>Add users</button>
        {
            props.users.map(el => <div>
                    <div className={Styles.wrapper_user}>
                        <div>
                            <div>
                                <img
                                    src={el.photos.small != null ? el.photos.small : "https://image.emojipng.com/4/9448004.jpg"}
                                    className={Styles.avatar}/>
                            </div>
                            {el.followStatus
                                ? <button onClick={() => props.unfollowToPerson(el.id)}>Unfollow</button>
                                : <button onClick={() => props.followToPerson(el.id)}>Follow</button>
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
    </div>
}


export default Users