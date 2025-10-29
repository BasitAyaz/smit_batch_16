  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";

    import { getAuth,createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";

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
  const auth =getAuth()
  const db = getDatabase()

  let userName = document.getElementById("userName")
  let email = document.getElementById("email")
  let password = document.getElementById("password")
  let courses = document.getElementById("courses")

  window.signUp = ()=>{
    let obj = {
      userName:userName.value,
      email:email.value,
      password:password.value,
      courses:courses.value,
    }

    createUserWithEmailAndPassword(auth,obj.email,obj.password).then((res)=>{
      const uid = res.user.uid
      delete obj.password
      obj.uid = uid

      const path = ref(db,`students/${uid}`)
      set(path,obj).then(()=>{
        window.location.replace("../index.html")
      })
    })
  }