const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";

let initialState = {
    users: [
        {id:1, photoAvatar:"", followStatus:false, fullName:'Sergey', status:'My name is sergey', location: {id:1, city:'Moscow', country:'Russia'} },
        {id:2, photoAvatar:"", followStatus:false, fullName:'Ivan', status:'My name is sergey', location: {id:1, city:'Moscow', country:'Russia'} },
        {id:3, photoAvatar:"", followStatus:true, fullName:'Petr', status:'My name is sergey', location: {id:1, city:'Moscow', country:'Russia'} }
    ]
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
        default:
            return state;
    }
}

export const followAC = (id) => ({type:"FOLLOW", userId:id})
export const unfollowAC = (id) => ({type:"UNFOLLOW", userId:id})
export default usersReducer;