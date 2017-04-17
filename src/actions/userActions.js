import firebase from '../firebase'

export function fetchUserData(firebaseUser) {

    return function (dispatch) {
        firebase.database()
            .ref('users')
            .child(`${firebaseUser.uid}`)
            .once('value')
            .then((snapshot) => {
                dispatch(logInSuccess(snapshot.val()))
            })
            .catch((error) => {
                console.log(error)
            });

    }
}

export function keysFetched(keys) {
    return { type: 'KEYS_FETCHED', payload: keys }

}

export function loadApiKeys() {
    return function (dispatch) {
        firebase.database()
            .ref('APIKEYS')
            .once('value', (snapShot) => {
                dispatch(keysFetched(snapShot.val()))
            })
            .catch((error) => {
                console.log(error)
            });
    }
}