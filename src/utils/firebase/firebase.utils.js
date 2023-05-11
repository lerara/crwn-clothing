import { initializeApp } from 'firebase/app';
import { 
    getAuth,
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword
 } from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDEaCKEnpoF6bLmRsX_9gy7TNap3VXOHdk",
    authDomain: "crwn-clothing-db-a5744.firebaseapp.com",
    projectId: "crwn-clothing-db-a5744",
    storageBucket: "crwn-clothing-db-a5744.appspot.com",
    messagingSenderId: "891816128736",
    appId: "1:891816128736:web:80c6a6279f75c8f160a085"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);


  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth, additionalInformation={displayName: 'mike'}) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()){
        const{ displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }
    return userDocRef;
  };

  export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
  }