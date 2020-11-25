
import Board from './Components/Board';
import './App.scss';
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
