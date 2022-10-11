const INITIAL_STATE = []

export default function userWorkoutsReducer(state = INITIAL_STATE, action) {
    console.log(action.type)
    switch(action.type) {
        case "ADD_NEW_WORKOUT":
            const workout = action.payload
            return [
                ...state,
                workout
            ]

        case "FETCHED_USER_WORKOUTS":
            return [
                ...action.payload
            ]

        case "FLUSH_USER_WORKOUTS":
            return []
        
        default:
            return state;
    }
}