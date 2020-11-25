
import Board from './Components/Board';
import './App.scss';
// import firebase from 'firebase/app' ;
// import 'firebase/firestore';
// import 'firebase/functions';



// var firebaseConfig = {
//   apiKey: "AIzaSyCOV50yQlmst_cbtsADiVH3j-RcqrLrOL0",
//   authDomain: "roy-test-db73c.firebaseapp.com",
//   databaseURL: "https://roy-test-db73c.firebaseio.com",
//   projectId: "roy-test-db73c",
//   storageBucket: "roy-test-db73c.appspot.com",
//   messagingSenderId: "625353033482",
//   appId: "1:625353033482:web:54e3e50797b6929dd99cf3",
//   measurementId: "G-VP1C9GDGS0"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// const trackTasks = firebase.functions().httpsCallable('trackTasks');
// trackTasks().then(hi => console.log(hi));
//const tickets = [{content: 'hi there'}, { content: 'hello world!'}];
// const candidateTickets = [];
// const qaTickets = [];
// const inProgressTickets = [];
// const completedTickets = []
// const ref = firebase.firestore().collection('boards').doc('Sales').collection('tasks');

// ref.get().then(docs => {
//   console.log(docs);
//   docs.forEach(doc => {
//     console.log(doc.data());
//         switch(doc.data().status) {
//       case 'qa':
//         qaTickets.push(doc.data());
//         break;
//       case 'completed':
//         completedTickets.push(doc.data());
//         break;
//       case 'inProgress':
//         inProgressTickets.push(doc.data());
//         break;
//       case 'candidate':
//         candidateTickets.push(doc.data());  
//         break;    
//     } 
//   });
// });  
//console.log(qaTickets);

// ref.onSnapshot(snapshot => {
//   // candidateTickets = snapshot.filter( doc => doc.status === 'candidate');
//   // qaTickets = snapshot.filter( doc => doc.status === 'qa');

//   snapshot.forEach( doc => {
//     //console.log(doc.data().status);

//     switch(doc.data().status) {
//       case 'qa':
//         qaTickets.push(doc.data());
//         break;
//       case 'completed':
//         completedTickets.push(doc.data());
//         break;
//       case 'inProgress':
//         inProgressTickets.push(doc.data());
//         break;
//       case 'candidate':
//         candidateTickets.push(doc.data());  
//         break;    
//     } 
//     // if (doc.data().status === 'qa') {
//     //   qaTickets.push(doc.data());
//     // } 
//   });
// });

import firebase from 'firebase/app' ;
import 'firebase/firestore';
import 'firebase/functions';

const firebaseConfig = {
  apiKey: "AIzaSyCOV50yQlmst_cbtsADiVH3j-RcqrLrOL0",
  authDomain: "roy-test-db73c.firebaseapp.com",
  databaseURL: "https://roy-test-db73c.firebaseio.com",
  projectId: "roy-test-db73c",
  storageBucket: "roy-test-db73c.appspot.com",
  messagingSenderId: "625353033482",
  appId: "1:625353033482:web:54e3e50797b6929dd99cf3",
  measurementId: "G-VP1C9GDGS0"
};

firebase.initializeApp(firebaseConfig);

function App() {

  return (
    <Board/>
  );
}

export default App;
