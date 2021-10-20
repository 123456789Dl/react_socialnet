import React from "react";
import Styles from "./users.module.css"

const Users = (props) => {
    debugger
    return <div>
        {
            props.users.map(el => <div>
                    <div className={Styles.wrapper_user}>
                        <div>
                            <div>
                                <img src="https://image.emojipng.com/4/9448004.jpg" className={Styles.avatar}/>
                            </div>
                            {el.followStatus
                                ?<button onClick={() => props.unfollowToPerson(el.id)}>Unfollow</button>
                                :<button onClick={() => props.followToPerson(el.id)}>Follow</button>
                                }
                        </div>
                        <div className={Styles.main_content}>
                            <div>{el.fullName}</div>
                            <div>{el.status}</div>
                            <div>{el.location.country}</div>
                            <div>{el.location.city}</div>
                        </div>
                    </div>
                </div>
            )
        }
    </div>
}


export default Users