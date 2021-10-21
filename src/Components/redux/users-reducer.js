const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

let initialState = {
    users: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(element => {
                    if (element.id === action.userId) {
                        return {...element, followStatus: true}
                    }
                    return element
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(element => {
                    if (element.id === action.userId) {
                        return {...element, followStatus: false}
                    }
                    return element
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
}

export const followAC = (id) => ({type: "FOLLOW", userId: id})
export const unfollowAC = (id) => ({type: "UNFOLLOW", userId: id})
export const setUsersAC = (users) => ({type: "SET-USERS", users: users})
export default usersReducer;