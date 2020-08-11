
const firebase = require('firebase/app');
require('firebase/database')

var firebaseConfig = {
    apiKey: "AIzaSyAnjTHII88S8hjBAkPl1KnKik5eYLMw2Pg",
    authDomain: "newsweb-22cd2.firebaseapp.com",
    databaseURL: "https://newsweb-22cd2.firebaseio.com",
    projectId: "newsweb-22cd2",
    storageBucket: "newsweb-22cd2.appspot.com",
    messagingSenderId: "95526053041",
    appId: "1:95526053041:web:ebecfdc5aa2807a96fee90",
    measurementId: "G-CPZNFR8M7P"
  }

  var fire = firebase.initializeApp(firebaseConfig)

  export default fire