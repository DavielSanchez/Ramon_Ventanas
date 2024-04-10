import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from 'uuid';

const firebaseConfig = {
    apiKey: "AIzaSyApSJy_RjM-7IV2DK9kV8kytPMjqB48I0o",
    authDomain: "ramon-ventanas.firebaseapp.com",
    projectId: "ramon-ventanas",
    storageBucket: "ramon-ventanas.appspot.com",
    messagingSenderId: "209605777041",
    appId: "1:209605777041:web:09334d72af07ec021f1130",
    measurementId: "G-JCF40B35T6"
};


export const FireBaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(FireBaseApp);

//Authentication//
export const auth = getAuth(FireBaseApp);

export async function userExist(uid) {
    const docRef = doc(db, 'users', uid);
    const res = await getDoc(docRef)
    console.log(res)
    return res.exists()
}

/////////////Conecciones para la base de datos////////////////

export const db = getFirestore(FireBaseApp);

/////////////////////////////////////////////////////////////

export const storage = getStorage(FireBaseApp, "gs://ramon-ventanas.appspot.com");

export const uploadFile = (file) => {
    const storageRef = ref(storage, `Productos/${v4()}`);
    uploadBytes(storageRef, file)
    const url = getDownloadURL(storageRef)
    return url;
}