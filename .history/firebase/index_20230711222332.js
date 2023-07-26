import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  sendEmailVerification,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  query,
  where,
  limit,
  orderBy,
  updateDoc,
  doc,
  arrayUnion,
} from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASURMENT_ID,
};
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

const auth = getAuth(app);

const db = getFirestore(app);

const storage = getStorage(app);

//MAIN FUNCTIONS
//visitors
const visitorsRef = collection(db, "wesiudev", "visitors", "visitorsRequests");

async function addVisitorRequest(req) {
  await addDoc(visitorsRef, req);
}

//users
const usersRef = collection(db, "wesiudev", "users", "users");

async function getUser(email) {
  const q = query(usersRef, where("email", "==", email));
  const querySnapshot = await getDocs(q);
  const user = querySnapshot.docs.map((doc) => doc.data());
  return user;
}
export {
  //providers
  provider,
  storage,
  auth,
  //visitors
  addVisitorRequest,

  //users
  getUser,
};
