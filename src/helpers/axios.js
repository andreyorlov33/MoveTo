import axios from 'axios'

const Axios = {
    getZipCode: (zipCodeKey, searchTerm) => {
        let zipcodeQueryUrl = `https://crossorigin.me/https://www.zipcodeapi.com/rest/${zipCodeKey}/city-zips.json/${searchTerm}/CA`;
        return axios.get(zipcodeQueryUrl)
            .then((response) => {
                let zipcode = response.data.zip_codes[0]
                return zipcode
            })
    },

    jambase: (jambaseKey, zipcode) => {
        let jambaseQueryUrl = `http://api.jambase.com/events?zipcode=${zipcode}&page=1${jambaseKey}`;
        return axios.get(jambaseQueryUrl)
            .then((response) => {
                let events = response.data.Events
                return events
            })
    },
    quandle: (quandleKey, zipcode) => {
        let quandleQuerryUrl = `https://www.quandl.com/api/v3/datasets/ZILL/Z${zipcode}_RMP.json?${quandleKey}`
        return axios.get(quandleQuerryUrl)
            .then((response) => {
                console.log(response)
                let rentInfo = response.data.dataset.data
                return rentInfo
            })
    },
    weatherInfo: (weatherKey, searchTerm) => {
        let openWeatherApiQuerry = `http://api.openweathermap.org/data/2.5/forecast/daily?q='${searchTerm}&cnt=7${weatherKey}`
        return axios.get(openWeatherApiQuerry)
            .then((response) => {
                return response.data
            })
    }
}

export default Axios

