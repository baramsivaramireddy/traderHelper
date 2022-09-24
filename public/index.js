 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
 import { 
    
    getAuth ,
    onAuthStateChanged ,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
//  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries
 import { 
    
  getFirestore,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

 import { 
        showApp , 
        showLogin,
        hideLogin,
        showSignUp,
        hideSignUp,
        hideApp,
        
    } from './ui.js'

 
 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyDr1fNDRp_XMJHmqrmEhQyLpi3KxF-7rLQ",
   authDomain: "trader-helper-4bd38.firebaseapp.com",
   databaseURL: "https://trader-helper-4bd38-default-rtdb.firebaseio.com",
   projectId: "trader-helper-4bd38",
   storageBucket: "trader-helper-4bd38.appspot.com",
   messagingSenderId: "1060907552506",
   appId: "1:1060907552506:web:e3e6552b43d6f93e3b8343"
 };

 // Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
 export  const db = getFirestore(app);
 
 onAuthStateChanged(auth, (user) => {
 
    if (user) {
      // User is signed in, 
      const uid = user.uid;
      
      console.log(user)
        
        showApp()
        hideLogin()
        hideSignUp()
      
    } else {
      // User is signed out

      hideApp()
      showLogin()
      showSignUp()
    }
  });
  

