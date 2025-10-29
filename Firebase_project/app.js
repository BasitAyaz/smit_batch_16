// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";

import { getAuth, onAuthStateChanged,signOut  } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";

import {getDatabase,ref,get} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-database.js"



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
const db = getDatabase()

const loginLink = document.getElementById("loginLink")
const profileLink = document.getElementById("profileLink")
const signUpLink = document.getElementById("signUpLink")
const logoutBtn = document.getElementById("logoutBtn")
const dataTable = document.getElementById("dataTable")
let uid;

let getData = ()=>{
  const path = ref(db,`links/${uid}`)
  get(path)
  .then((res)=>{
    let data = res.val()
    
    let arr = Object.entries(data)
    let filterArr = arr.filter(x=>x[0] && x[1])
    console.log(filterArr)
    filterArr.map((t)=>{
      dataTable.innerHTML += `<tr>
      <td class="p-2 border">${t[0]}</td>
      <td class="p-2 border">${t[1]}</td>
      </tr>`
      })
  }).catch((err)=>{

  })
}

let init = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user)
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      uid = user.uid;
      getData()
      loginLink.style.display = "none"
      signUpLink.style.display = "none"
      profileLink.style.display = "inline-block"
      logoutBtn.style.display = "inline-block"
      // ...
    } else {
      console.log("User is Not Logged In")
      // User is signed out
      // ...
      loginLink.style.display = "inline-block"
      signUpLink.style.display = "inline-block"
      profileLink.style.display = "none"
      logoutBtn.style.display = "none"
    }
  });
}

init()

window.logout = ()=>{
signOut(auth).then(() => {
  // Sign-out successful.
  Window.location.replace("login/login.html")
}).catch((error) => {
  // An error happened.
});

}