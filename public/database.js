import { 
    doc,
    getDoc,
    collection,
     addDoc,
     getDocs,
     query,
      where, 
      limit ,
  } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

  import {showErrorMessage} from "./helper.js"
  import {db  ,auth} from './index.js'



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


    const q = query(collection(db, collectionName),limit(10));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        });
 
}


export async function getParticularDoc(collectionName, DocId)
{
      const docRef = doc(db, collectionName, DocId)
    const docSnap = await getDoc(docRef)
    
    if (docSnap.exists()) {
     return  docSnap.data()
    }

}