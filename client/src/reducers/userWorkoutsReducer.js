const INITIAL_STATE = []

export default function userWorkoutsReducer(state = INITIAL_STATE, action) {
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
        
        default:
            return state;
    }
}