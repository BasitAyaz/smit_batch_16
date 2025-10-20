// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";

import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";

import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-database.js"



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth()
const db = getDatabase();

let facebook = document.getElementById("facebook")
let twitter = document.getElementById("twitter")
let linkedin = document.getElementById("linkedin")
let instagram = document.getElementById("instagram")
let uid;

let init = () => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log(user)
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            uid = user.uid;

            // ...
        } else {
            console.log("User is Not Logged In")
            window.location.href("../login/login.html")
        }
    });
}

init()

window.save = () => {
    let obj = {
        facebook: facebook.value,
        twitter: twitter.value,
        linkedin: linkedin.value,
        instagram: instagram.value
    }

    const path = ref(db, `links/${uid}/`)
    set(path, obj)

    console.log(obj)
}