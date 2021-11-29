
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";


// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
  apiKey: "AIzaSyBa47uNdLCeYRSa7gZK6-1ne9PQIWPmUew",
  authDomain: "e-servicios.firebaseapp.com",
  projectId: "e-servicios",
  storageBucket: "e-servicios.appspot.com",
  messagingSenderId: "739404789327",
  appId: "1:739404789327:web:a37af74c3bde01e45f1c3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Accedemos a Firestore 
const db = getFirestore(app);

// Accedemos a Firestore 
const auth = getAuth();
export { auth }


// FIRESTORE
// ...................................................................................................................

export async function fireGetItemById(itemId) {
  // https://firebase.google.com/docs/firestore/query-data/get-data?authuser=0
  try {
    const docRef = doc(db, "items", itemId)
    const docSnap = await getDoc(docRef);
    return { itemId: itemId, ...docSnap.data() }
  } catch (err) {
    console.log('Error Code: ', err.code);
    console.log('Error Message: ', err.message);
    return false
  }
}


export async function fireGetItemsByCategoryId(categoryId) {
  // https://firebase.google.com/docs/firestore/query-data/get-data?authuser=0
  try {
    if (categoryId) {
      const querySnap = await getDocs(query(collection(db, "items"), where("categoryId", "==", categoryId)));
      const arrayItems = querySnap.docs.map(doc => ({ itemId: doc.id, ...doc.data() }))
      return (arrayItems)
    } else {
      const querySnap = await getDocs(collection(db, "items"));
      const arrayItems = querySnap.docs.map(doc => ({ itemId: doc.id, ...doc.data() }))
      return (arrayItems)
    }
  } catch (err) {
    console.log('Error Code: ', err.code);
    console.log('Error Message: ', err.message);
    return false
  }
}


export async function fireAddOrder(newOrder) {
  // https://firebase.google.com/docs/firestore/manage-data/add-data?authuser=0

  if (!auth.currentUser) {
    return false
  }

  const user = {
    name: auth.currentUser.displayName,
    email: auth.currentUser.email
  }

  newOrder.user = user
  newOrder.timestamp = (new Date()).toLocaleString()

  try {
    const docRef = await addDoc(collection(db, "orders"), newOrder);
    console.log("Document written with ID: ", docRef.id);
    return true
  } catch (err) {
    return err
  }
}




// AUTH
// ...............................................................................................................
// https://firebase.google.com/docs/auth/web/start?authuser=0

export async function fireSignUp(name, email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)

    updateProfile(auth.currentUser, {
      displayName: name,
      //photoURL: "https://example.com/jane-q-user/profile.jpg"
    }).then(() => {
      console.log('Name incluido con exito')
    })
    console.log('credential: ', userCredential.user)


  } catch (err) {
    console.log('Error Code: ', err.code);
    console.log('Error Message: ', err.message);
    return false
  }
  return true
}


export async function fireSignIn(email, password) {
  try {
    await signInWithEmailAndPassword(auth, email, password)
    // const userCredential = await signInWithEmailAndPassword(auth, email, password)
    // console.log('credential: ', userCredential.user)
  } catch (err) {
    console.log('Error Code: ', err.code);
    console.log('Error Message: ', err.message);
    return false
  }
  return true
}


export async function fireSignOut() {
  try {
    await signOut(auth)
  } catch (err) {
    console.log('Error Code: ', err.code);
    console.log('Error Message: ', err.message);
    return false
  }
  return true
}


export function fireCurrentUser() {
  const auth = getAuth();
  return auth.currentUser;
}







