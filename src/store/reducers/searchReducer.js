export default function searchReducer(state = {}, action) {
    switch (action.type) {
        case 'KEYS_FETCHED':
            return Object.assign({}, state, {
                ApiKeys: { ...action.payload }
            })
        case 'JAMBASE_EVENTS_FETCHED':
            return Object.assign({}, state, {
                events: { ...action.payload }
            })

        case 'RENT_DATA_FETCHED':
            return Object.assign({}, state, {
                rentData: { ...action.payload }
            })

        case 'SET_SEARCH_TERM':
            return Object.assign({}, state, {
                currentSearch: action.payload
            })

        case 'WEATHER_DATA_FETCHED':
            return Object.assign({}, state, {
                weatherData: { ...action.payload }
            })

        case 'ADD_TO_PAST_SEARCHES_ARRAY':
            if (state.pastSearches.includes(action.payload)) {
                return state
            } else {
                return Object.assign({}, state, {
                    pastSearches: [...state.pastSearches, action.payload]
                })
            }


        default:
            return state
    }
}