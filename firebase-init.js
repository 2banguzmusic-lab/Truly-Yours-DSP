const firebaseConfig = {
  apiKey: "AIzaSyB9b9me_xmEorNFSMPHsTiDP4u7Pc6jfA",
  authDomain: "truly-yours-dsp-2025.firebaseapp.com",
  projectId: "truly-yours-dsp-2025",
  storageBucket: "truly-yours-dsp-2025.firebasestorage.app",   // <-- THIS IS THE FIX
  messagingSenderId: "369021987682",
  appId: "1:369021987682:web:dbe97e15e0b8fb8bc3bb09"
};

firebase.initializeApp(firebaseConfig);
