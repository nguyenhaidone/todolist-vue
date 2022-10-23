// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA4DJB1_GQOHUaS_GAfkVh-xC_TnM1l_Kc',
  authDomain: 'todolist-vue-88a04.firebaseapp.com',
  projectId: 'todolist-vue-88a04',
  storageBucket: 'todolist-vue-88a04.appspot.com',
  messagingSenderId: '805865367745',
  appId: '1:805865367745:web:2520bf1931f6612ab20c40',
  measurementId: 'G-9EDXJG3F07'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

// <script type="module">
//   // Import the functions you need from the SDKs you need
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-analytics.js";
//   // TODO: Add SDKs for Firebase products that you want to use
//   // https://firebase.google.com/docs/web/setup#available-libraries

//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   const firebaseConfig = {
//     apiKey: "AIzaSyA4DJB1_GQOHUaS_GAfkVh-xC_TnM1l_Kc",
//     authDomain: "todolist-vue-88a04.firebaseapp.com",
//     projectId: "todolist-vue-88a04",
//     storageBucket: "todolist-vue-88a04.appspot.com",
//     messagingSenderId: "805865367745",
//     appId: "1:805865367745:web:2520bf1931f6612ab20c40",
//     measurementId: "G-9EDXJG3F07"
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);
// </script>
