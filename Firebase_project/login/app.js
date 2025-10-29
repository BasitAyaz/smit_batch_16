// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";

import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";




  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDgu7eaKF_7w3UR-9I6irYC4mm73nwXs2U",
    authDomain: "batch-16-practice.firebaseapp.com",
    databaseURL: "https://batch-16-practice-default-rtdb.firebaseio.com",
    projectId: "batch-16-practice",
    storageBucket: "batch-16-practice.firebasestorage.app",
    messagingSenderId: "7126675689",
    appId: "1:7126675689:web:1170519b0f986259ab4078",
    measurementId: "G-HLYDK5XNW4"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth()

  let email  = document.getElementById("loginEmail")
  let password = document.getElementById("loginPassword")

window.login = ()=>{
    let obj = {
        email:email.value,
        password:password.value
    }
    console.log(obj)

    signInWithEmailAndPassword(auth,obj.email,obj.password)
    .then((res)=>{
        console.log(res)
        window.location.replace("../index.html")
    })
    .catch((err)=>{
        console.log(err)
    })


  }