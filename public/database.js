import { 
    collection,
     addDoc,
     getDocs,
  } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

  import {showErrorMessage} from "./helper.js"
  import {db } from './index.js'



export async function addDocumentToCollection(collectionName,Document){
    let collectionRef = collection(db, collectionName)
            
        try {
            const docRef = await addDoc(collectionRef, Document);
        
            console.log("Document written with ID: ",docRef.id);
            // showErrorMessage("Document written with ID: ".concat(docRef.id))
        } catch (e) {
            // showErrorMessage("Error adding document: ", e);

            console.error("Error adding document: ", e);
        }
}



export async function getDocuments(collectionName){
            const querySnapshot = await getDocs(collection(db, collectionName));
                    querySnapshot.forEach((doc) => {
                    console.log(`${doc.id} => ${doc.data()}`);
        })
}