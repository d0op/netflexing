import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

//project overview register app
const config = {
  apiKey: "AIzaSyD7k8VkMkTFysQjItUjUlvmh4t7gxIXZbw",
  authDomain: "netflix-b803a.firebaseapp.com",
  databaseURL: "https://netflix-b803a.firebaseio.com",
  projectId: "netflix-b803a",
  storageBucket: "netflix-b803a.appspot.com",
  messagingSenderId: "27898094667",
  appId: "1:27898094667:web:9ebb0a4be49814e7e119ce",
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
