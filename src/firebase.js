// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyALlw_AmVmDSj-osiStqHKiGSiZ8LrL8cc",
    authDomain: "appfirebasestorage-48799.firebaseapp.com",
    projectId: "appfirebasestorage-48799",
    storageBucket: "appfirebasestorage-48799.appspot.com",
    messagingSenderId: "3633123484",
    appId: "1:3633123484:web:d9461334eceb8814e9dd59",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;