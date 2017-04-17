import firebase from '../firebase'

// Log In Action Creator // 
export function logIn(credential) {
    // dispatch the firebase auth function and write out logic based on responce of the cb
    return function (dispatch) {
        firebase.auth()
            .signInWithEmailAndPassword(credential.email, credential.password)
            .then((firebaseUser) => {
                dispatch(fetchUserData(firebaseUser))
                dispatch(loadApiKeys())
            })
            .catch((error) => {
                console.log(error)
            });
    }
}

export function register(credential) {
    let userName = credential.userName

    return function (dispatch) {
        firebase.auth()
            .createUserWithEmailAndPassword(credential.email, credential.password)
            .then((firebaseUser) => {
                firebase.database()
                    .ref('users')
                    .child(`${firebaseUser.uid}`)
                    .set({
                        'userID': firebaseUser.uid,
                        'username': userName
                    })
                dispatch(loadApiKeys())
                dispatch(fetchUserData(firebaseUser))

            })
            .catch((error) => {
                console.log(error)
            });
    }
}

export function logOut() {
    return function (dispatch, getState) {
        let searchHistoryArray = getState().pastSearches
        let uid = getState().uid
        firebase.database()
            .ref('users')
            .child(uid)
            .child('pastSearches')
            .set(searchHistoryArray)
            .catch((error) => {
                console.log(error)
            });
        firebase.auth().signOut()
        dispatch(logOutSuccess())
    }
}


export function logInSuccess(userData) {
    return { type: 'LOG_IN_SUCCESS', payload: userData };
}

export function logOutSuccess(){
    return { type:'LOG_OUT_SUCCESS'}
}