import { auth } from './firebase';

// auth status listener
auth.onAuthStateChanged(user => {
    console.log('user', user);
    if (user) {
        // user is signed in
    } else {
        // signedout
    }
})

export const firebaseSignUp = async (obj, callback, errCallback) => {
  const { email, password } = obj;

  try {
        const cred = await auth.createUserWithEmailAndPassword(email, password);
        const { user } = cred;
        callback(user);
    } catch (err) {
        errCallback(err);
    }
}

export const firebaseSignout = async (callback, errCallback) => {
    try {
          await auth.signOut();
          callback();
      } catch (err) {
          errCallback(err);
      }
  }

export const firebaseSignIn = async (obj, callback, errCallback) => {
    const { email, password } = obj;
  
    try {
          const cred = await auth.signInWithEmailAndPassword(email, password);
          const { user } = cred;
          callback(user);
      } catch (err) {
          errCallback(err);
      }
  }

