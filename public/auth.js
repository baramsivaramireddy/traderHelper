import {showErrorMessage} from "./helper.js"
import {auth} from './index.js'

import { 
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail  ,
  sendEmailVerification
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";




export function createAccount(email,password,conformPassword) {
      
   if (password === conformPassword) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        showErrorMessage(errorCode)
      });
      sendEmailVerification(auth.currentUser).then(
        ()=> {
          console.log('mail sent')
          showErrorMessage('sent email verification succefully')
        }
      )
    }
  else {
    showErrorMessage('password mismatch')
  }
  
}


export function signIn(email,password){
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        showErrorMessage(errorCode)
      });
      
}

export function signout() {
  signOut(auth).then(() => {
    // Sign-out successful.
    console.log('sign out')
  }).catch((error) => {
    showErrorMessage('error occured')
  });
  
}

export function passwordReset(email) {
  
  sendPasswordResetEmail(auth, email)
  .then(() => {
    // Password reset email sent!\
    showErrorMessage('password reset mail was sent')
    // ..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    showErrorMessage('error occured while sending password reset mail' )
    // ..
  });
}