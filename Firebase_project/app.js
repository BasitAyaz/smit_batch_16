// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";

import { getAuth, onAuthStateChanged,signOut  } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth()

const loginLink = document.getElementById("loginLink")
const profileLink = document.getElementById("profileLink")
const signUpLink = document.getElementById("signUpLink")
const logoutBtn = document.getElementById("logoutBtn")


let init = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user)
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
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