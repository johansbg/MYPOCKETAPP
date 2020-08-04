import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDLMoqxaVvq_kZyBbQG7-PBMFG1i7kwRNU",
  authDomain: "my-pocket-app.firebaseapp.com",
  databaseURL: "https://my-pocket-app.firebaseio.com",
  projectId: "my-pocket-app",
  storageBucket: "my-pocket-app.appspot.com",
  messagingSenderId: "21972688496",
  appId: "1:21972688496:web:00fb05aa86584786f31eb5",
  measurementId: "G-K9LNX2ZDNJ"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
