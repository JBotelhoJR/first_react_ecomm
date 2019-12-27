import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBtwdOz68PswWKkU6IPsmW7HIo6C94JJsA',
  authDomain: 'first-e-comm.firebaseapp.com',
  databaseURL: 'https://first-e-comm.firebaseio.com',
  projectId: 'first-e-comm',
  storageBucket: 'first-e-comm.appspot.com',
  messagingSenderId: '11048536169',
  appId: '1:11048536169:web:4ba173bdf6a552a1cc7af8',
  measurementId: 'G-8HFKDSKBNX'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
