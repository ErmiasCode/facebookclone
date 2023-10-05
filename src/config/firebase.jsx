import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, getRedirectResult } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDYu-w1F37uKWBbC6Dma_Aaz7cN9p_JjYA",
  authDomain: "facebook-clone-30c23.firebaseapp.com",
  projectId: "facebook-clone-30c23",
  storageBucket: "facebook-clone-30c23.appspot.com",
  messagingSenderId: "869057658277",
  appId: "1:869057658277:web:e1c1fe40e0a4baccf83c4c",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();

onAuthStateChanged(auth, user => {
	if(user != null) {
    //console.log("User", user)
  } else {
    console.log("No user")
  }
})

export { auth, provider };
export default db;


// function syncData() {
// 	const messagesRef = collection(db, `posts`);
// 	onSnapshot(messagesRef, snapshot => {
// 		const messages = snapshot.docs.map(doc => doc.data());

//     console.log("Datenbank", messages)
		
// 		// Now you can bind them to your UI. Whenever the data changes
// 		// The UI will automatically stay up to date.
		
// 	});
// }

// syncData()