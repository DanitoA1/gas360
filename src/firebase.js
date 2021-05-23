import { initializeApp } from 'firebase';

const app = initializeApp({
  apiKey: 'AIzaSyDJG17FlXS2YapJpczda_RlYN63gUyhzCU',
  authDomain: 'gas360-dfa48.firebaseapp.com',
  databaseURL: "https://gas360-dfa48.firebaseio.com",
  projectId: 'gas360-dfa48',
  storageBucket: 'gas360-dfa48.appspot.com',
  messagingSenderId: '930239209453',
  appId: '1:930239209453:web:73b908a10fcc2205fb91e4',
  measurementId: 'G-WKJXB2WYGN'
});

export const db = app.firestore();
export const rt = app.database();
export const namesRef = rt.ref('names');
export const todosCollection = db.collection('todos');
