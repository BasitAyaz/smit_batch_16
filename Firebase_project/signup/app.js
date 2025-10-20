// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";

import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";




  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {};

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth()

  let email  = document.getElementById("loginEmail")
  let password = document.getElementById("loginPassword")

window.signUp = ()=>{
    let obj = {
        userName: userName.value,
        email:email.value,
        password:password.value
    }
    console.log(obj)

    createUserWithEmailAndPassword(auth,obj.email,obj.password)
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.log(err)
    })


  }