import {showErrorMessage} from "./helper.js"
import {auth} from './index.js'

import { 
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
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
    }
  else {
    alert('password mismatch')
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
        alert(errorCode)
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