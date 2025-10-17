// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";


import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-database.js";



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
const database = getDatabase();

let facebook = document.getElementById("facebook")
let twitter = document.getElementById("twitter")
let linkedin = document.getElementById("linkedin")
let instagram = document.getElementById("instagram")

window.save = () => {
    let obj = {
        facebook: facebook.value,
        twitter: twitter.value,
        linkedin: linkedin.value,
        instagram: instagram.value
    }

    const linkReference = ref(database, 'links/')
    set(linkReference, obj)


    console.log(obj)
}