import firebase from 'firebase/app';
import 'firebase/auth';
 const app = firebase.initializeApp(
     {
        apiKey: "AIzaSyCJNRCWfcqOOG2h7sC0qw6Ad89qWsDhZgs",
    authDomain: "burgerapp-b7f16.firebaseapp.com",
    databaseURL: "https://burgerapp-b7f16.firebaseio.com",
    projectId: "burgerapp-b7f16",
    storageBucket: "burgerapp-b7f16.appspot.com",
    messagingSenderId: "1003497267615",
    appId: "1:1003497267615:web:22209eab5c16cd815c9daa"

     }
 )
 export const auth = app.auth()
 export default app
 