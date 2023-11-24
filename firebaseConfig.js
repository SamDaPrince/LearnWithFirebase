// get firebase modules via Javascript SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";

// apiKey: Public API key to interact with Firebase services
// authDomain: URL used for user authentication services
// projectId: Project ID for your Firebase application
// storageBucket: URL for file storage within your application
// messagingSenderId: Sender ID for sending messages via Firebase Cloud Messaging
// appId: Application ID for the Firebase app, it is unique to this application

// STEP 1: Declare Firebase Environment Variables  
const firebaseConfig = {
    apiKey: "AIzaSyDx_oh5LTfrNCm_uetuCsGfDOHj7N4QgEU",
    authDomain: "learnwithfirebaseworksho-92202.firebaseapp.com",
    projectId: "learnwithfirebaseworksho-92202",
    storageBucket: "learnwithfirebaseworksho-92202.appspot.com",
    messagingSenderId: "1092867830922",
    appId: "1:1092867830922:web:e93033aa2f648576796973",
    measurementId: "G-JJN58HQY99"
  };

// initialze firebase in our project by passing in our environment variables to the `initializeApp` method
const app = initializeApp(firebaseConfig);

// initialze firebase authentication by passing in firebase `app` instance we delared on the line above
export const auth = getAuth(app);

// initialze firestore by passing in firebase `app` instance we delared
export const db = getFirestore(app);
