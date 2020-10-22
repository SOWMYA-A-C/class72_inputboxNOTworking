import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCsJB2Of7yl2yBvdUeB0pcfS9uxB8Ap6v4",
  authDomain: "willy-91955.firebaseapp.com",
  databaseURL: "https://willy-91955.firebaseio.com",
  projectId: "willy-91955",
  storageBucket: "willy-91955.appspot.com",
  messagingSenderId: "27165354604",
  appId: "1:27165354604:web:4c536d53811a1c5dc50649"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
