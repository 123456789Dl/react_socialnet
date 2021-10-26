const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"

let initialState = {
    users: [],
    totalCount: 20,
    lengthOfPage: 4,
    selectedPage:1
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
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                selectedPage: action.curPage
            }
        default:
            return state;
    }
}

export const followAC = (id) => ({type: "FOLLOW", userId: id})
export const unfollowAC = (id) => ({type: "UNFOLLOW", userId: id})
export const setUsersAC = (users) => ({type: "SET-USERS", users: users})
export const setCurrentPageAC = (curPage) => ({type:"SET-CURRENT-PAGE", curPage})
export default usersReducer;