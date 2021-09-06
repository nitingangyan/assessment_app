// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getDatabase,
  ref,
  onChildAdded,
  onChildChanged,
  onChildRemoved
} from 'firebase/database';

// const database = getDatabase();
// import 'firebase/database';
// import * as firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBoHwTZ7jnO56imcGqvDd26CfdsFZukSDM',
  authDomain: 'leaderboard-41287.firebaseapp.com',
  databaseURL: 'https://leaderboard-41287-default-rtdb.firebaseio.com',
  projectId: 'leaderboard-41287',
  storageBucket: 'leaderboard-41287.appspot.com',
  messagingSenderId: '939570793321',
  appId: '1:939570793321:web:afef831d19d188d0f78bf8'
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// function writeUserData() {
//   const db = getDatabase();
//   db.child('assessment').push(
//     {
//       username: 'nitin',
//       score: 80
//     },
//     err => {
//       if (err) console.log(err);
//       else setCurrentId('');
//     }
//   );
//   // set(ref(db, 'assessment/'), null);
// }
// writeUserData();
// export default firebaseApp;
// console.log(firebaseApp);
// var fireDb = firebase.initializeApp(firebaseConfig);

// export default firebaseApp.database().ref();

// export default firebaseApp.database().ref();
