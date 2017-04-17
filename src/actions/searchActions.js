import Axios from '../helpers/axios'

export function startSearch(searchTerm) {
    return (dispatch, getState) => {
        dispatch(setSearch(searchTerm))
        dispatch(fetchWeatherData(searchTerm))
        dispatch(fetchZipCode(searchTerm))
        dispatch(addToPastSearches(searchTerm))
    }
}


export function fetchWeatherData(searchTerm) {
    return (dispatch, getState) => {
        let weatherKey = getState().ApiKeys.weatherKey
        return Axios.weatherInfo(weatherKey, searchTerm)
            .then((weatherData) => {
                dispatch(weatherDataFetched(weatherData))
            })

    }
}


export function fetchZipCode() {
    return (dispatch, getState) => {
        let zipcodeKey = getState().ApiKeys.zipcodeKey
        let currentSearch = getState().currentSearch
        return Axios.getZipCode(zipcodeKey, currentSearch)
            .then((zipcode) => {
                dispatch(callJambase(zipcode))
                dispatch(callQuandle(zipcode))
            })
            .catch(error => { throw (error) })
    }
}

export function callJambase(zipcode) {
    return (dispatch, getState) => {
        let zip = zipcode
        let jambaseKey = getState().ApiKeys.jambaseKey

        return Axios.jambase(jambaseKey, zip)
            .then((events) => {
                dispatch(eventsFetched(events))
            })
            .catch(error => { throw (error) })
    }
}


export function callQuandle(zipcode) {
    return (dispatch, getState) => {
        let zip = zipcode
        let quandleKey = getState().ApiKeys.houseKey

        return Axios.quandle(quandleKey, zip)
            .then((rentData) => {
                dispatch(rentDataFetched(rentData))
            })
            .catch(error => { throw (error) })
    }
}


export function addToPastSearches(searchTerm) {
    return { type: 'ADD_TO_PAST_SEARCHES_ARRAY', payload: searchTerm }
}

export function eventsFetched(events) {
    return { type: 'JAMBASE_EVENTS_FETCHED', payload: events }
}

export function rentDataFetched(rentData) {
    return { type: 'RENT_DATA_FETCHED', payload: rentData }
}

export function setSearch(input) {
    return { type: 'SET_SEARCH_TERM', payload: input }
}

export function weatherDataFetched(data) {
    return { type: 'WEATHER_DATA_FETCHED', payload: data }
}