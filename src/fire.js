import firebase from 'firebase';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJ6EFzqU1BTBA6sNIzIJU1QEwQNi_lc7w",
  authDomain: "login-e0dd2.firebaseapp.com",
  databaseURL: "https://login-e0dd2.firebaseio.com",
  projectId: "login-e0dd2",
  storageBucket: "login-e0dd2.appspot.com",
  messagingSenderId: "756569523383",
  appId: "1:756569523383:web:cb056dfd76c96865497932",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
