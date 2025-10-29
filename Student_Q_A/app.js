// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";

import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";

import { getDatabase, ref, get, push, set, onValue } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-database.js";
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
const db = getDatabase()

const userName = document.getElementById("userName")
const questionInput = document.getElementById("questionInput")
let questionList = document.getElementById("questionList")

let userData;
let questions;

const getUserData = (uid) => {
  const path = ref(db, `students/${uid}`)
  get(path).then((data) => {
    userData = data.val()
    let obj = data.val()
    userName.innerHTML = obj.userName

  })
}

let renderQuestion = ()=>{
  questionList.innerHTML = ""
  questions.forEach(q => {
    questionList.innerHTML += `<div class="border rounded-xl p-2">
    <p class="text-2xl ">${q.question}</p>
    <p class="text-sm">${q.userName}</p>
    <p class="text-sm">${q.date}</p>
    </div>`
  });
}


let getQuestions = () => {
  const path = ref(db, `question`)
  onValue(path, (dt) => {
    let data = dt.val()
    questions = Object.values(data)
    renderQuestion()
    
  })
}

let init = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      getUserData(uid)
      getQuestions()
    } else {
      window.location.replace("login/index.html")
    }
  });
}
init()

window.askQuestion = () => {
  let obj = {
    question: questionInput.value,
    date: (new Date()).toUTCString(),
    userId: userData.uid,
    userName: userData.userName
  }

  const idRef = ref(db, "question")
  const id = push(idRef).key
  obj.id = id

  const path = ref(db, `question/${obj.id}`)
  set(path, obj).then(() => {

  }).catch((err) => {
    console.log(err)
  })
}
window.logout = ()=>{
  signOut(auth).then(() => {
  window.location.replace("login/index.html")
}).catch((error) => {
  // An error happened.
});
}