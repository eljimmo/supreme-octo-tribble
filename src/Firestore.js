const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

initializeApp({
  credential: cert({
    apiKey: "AIzaSyALlw_AmVmDSj-osiStqHKiGSiZ8LrL8cc",
    authDomain: "appfirebasestorage-48799.firebaseapp.com",
    databaseURL: "https://appfirebasestorage-48799-default-rtdb.firebaseio.com",
    projectId: "appfirebasestorage-48799",
    storageBucket: "appfirebasestorage-48799.appspot.com",
    messagingSenderId: "3633123484",
    appId: "1:3633123484:web:d9461334eceb8814e9dd59",
    measurementId: "G-STT36GL0E0"

  })
});

export const dbs = getFirestore();

// const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
// const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

// initializeApp({
//   credential: cert({
//     apiKey: "AIzaSyALlw_AmVmDSj-osiStqHKiGSiZ8LrL8cc",
//     authDomain: "appfirebasestorage-48799.firebaseapp.com",
//     databaseURL: "https://appfirebasestorage-48799-default-rtdb.firebaseio.com",
//     projectId: "appfirebasestorage-48799",
//     storageBucket: "appfirebasestorage-48799.appspot.com",
//     messagingSenderId: "3633123484",
//     appId: "1:3633123484:web:d9461334eceb8814e9dd59",
//     measurementId: "G-STT36GL0E0"

//   })
// });

// export const dbs = getFirestore();
