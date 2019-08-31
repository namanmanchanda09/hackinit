import firebase from 'firebase';

var Config = {
    apiKey: "AIzaSyD_HgLKTzN9_yLmvv_B7YFsdQS2B8W-cqI",
    authDomain: "hackinit-19993.firebaseapp.com",
    databaseURL: "https://hackinit-19993.firebaseio.com",
    projectId: "hackinit-19993",
    storageBucket: "hackinit-19993.appspot.com",
    messagingSenderId: "690808334064",
    appId: "1:690808334064:web:1f8083168ec574a5"
};
var fire = firebase.initializeApp(Config);
export default fire;