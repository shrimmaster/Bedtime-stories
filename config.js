import * as firebase from 'firebase'
require('@firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyBuwDN2xaIY4e-I2m1WvAtJ75wFkqK8zFY",
    authDomain: "story-hub-app-82471.firebaseapp.com",
    projectId: "story-hub-app-82471",
    storageBucket: "story-hub-app-82471.appspot.com",
    messagingSenderId: "83690466105",
    appId: "1:83690466105:web:aad1d0126655f80c8316e8"
  };
 
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
  export default firebase.firestore();