import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyB2T52nvFpzImlnPs26NlMPG9pS6h0ihto",
    authDomain: "moveto-5fe0c.firebaseapp.com",
    databaseURL: "https://moveto-5fe0c.firebaseio.com",
    projectId: "moveto-5fe0c",
    storageBucket: "moveto-5fe0c.appspot.com",
    messagingSenderId: "1037248697821"
}

firebase.initializeApp(config)

export default firebase;