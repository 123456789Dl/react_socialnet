const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING"

let initialState = {
    users: [],
    totalCount: 20,
    lengthOfPage: 4,
    selectedPage:1,
    isFetching:false
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
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.toggleFetching
            }
        default:
            return state;
    }
}

export const followToPerson = (id) => ({type: "FOLLOW", userId: id})
export const unfollowToPerson = (id) => ({type: "UNFOLLOW", userId: id})
export const setUsers = (users) => ({type: "SET-USERS", users: users})
export const setCurrentPage = (curPage) => ({type:"SET-CURRENT-PAGE", curPage})
export const toggleIsFetching = (toggleFetching) => ({type:TOGGLE_IS_FETCHING, toggleFetching})
export default usersReducer;