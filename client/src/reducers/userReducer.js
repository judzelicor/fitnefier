const INITIAL_STATE = {}

export default function userReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case "USER_LOGGED_IN":
            return {
                ...action.payload
            }

        case "USER_SIGNED_UP":
            return {
                ...action.payload
            }
        case "LOGIN_USER":
            return {
                ...action.payload
            }
            
        case "LOGOUT_USER":
            return {}

        default:
            return state;
    }
}