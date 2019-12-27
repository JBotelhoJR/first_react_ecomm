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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error createing user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
