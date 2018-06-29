import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDK2Ees-4rOhBtuXdzL31OL2c8m5B0E2Tw",
    authDomain: "catch-of-the-day-9bcf3.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-9bcf3.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;