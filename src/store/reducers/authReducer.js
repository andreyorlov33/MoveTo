
export default function authReducer(state = {}, action) {
    switch (action.type) {
        case 'LOG_IN_SUCCESS':
            return Object.assign({}, state, {
                authorized: true,
                userName: action.payload.username,
                uid: action.payload.userID,
                pastSearches: [...action.payload.pastSearches || state]
            })

        case 'GUEST_LOG_IN':
            return Object.assign({}, state, {

            })

        case 'LOG_OUT_SUCCESS':
            return state = {}
    }

}