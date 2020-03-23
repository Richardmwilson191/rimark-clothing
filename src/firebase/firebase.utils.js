import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAuaO_3vgyTRklYdax2a09ZHltK0v8wkHo',
  authDomain: 'rimark-db.firebaseapp.com',
  databaseURL: 'https://rimark-db.firebaseio.com',
  projectId: 'rimark-db',
  storageBucket: 'rimark-db.appspot.com',
  messagingSenderId: '549877153463',
  appId: '1:549877153463:web:37c84b073518e2be571732',
  measurementId: 'G-FSPH2RM3FW'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
