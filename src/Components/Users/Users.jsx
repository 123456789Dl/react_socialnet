import React from "react";
import Styles from "./users.module.css"
import userPhoto from "../../icons/farmer.png"

const Users = (props) => {
    let pagesData = []
    let pagesCounter = Math.ceil(props.totalCount / props.lengthOfPage)
    for (let i = 1; i <= pagesCounter; i++) {
        pagesData.push(i)
    }

    return <div>
        {
            props.users.map(el => <div>
                    <div className={Styles.wrapper_user}>
                        <div>
                            <div>
                                <img
                                    src={el.photos.small != null ? el.photos.small : userPhoto}
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
                            {/*<div>{"el.location.country"}</div>
                                <div>{"el.location.city"}</div>*/}
                        </div>
                    </div>
                </div>
            )
        }
        <div className={Styles.page_number_line}>
            {pagesData.map(el => {
                return <span className={props.selectedPage === el && Styles.selectedPage}
                             onClick={() => props.onPageChanged(el)}>{el} </span>
            })}
        </div>
    </div>

}


export default Users