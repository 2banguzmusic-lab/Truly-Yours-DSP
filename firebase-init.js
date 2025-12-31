// --- Firebase Initialization (Truly Yours DSP v2) ---

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";

export const firebaseConfig = {
  apiKey: "AIzaSyCyt3DsYE6fE4ZARXoE2uP5ddWg2OvwLxs",
  authDomain: "truly-yours-dsp-v2.firebaseapp.com",
  projectId: "truly-yours-dsp-v2",
  storageBucket: "truly-yours-dsp-v2.appspot.com", // <-- FIXED
  messagingSenderId: "26187926000",
  appId: "1:26187926000:web:7aa5ede1559bf2fec3f535"
};

export const app = initializeApp(firebaseConfig);

