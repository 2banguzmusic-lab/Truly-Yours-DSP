// ====== IMPORTS ======
import { app } from "./firebase-init.js";

import { 
  getStorage, ref, listAll, getDownloadURL 
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-storage.js";

import {
  getFirestore, doc, getDoc, setDoc, updateDoc, increment
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

const storage = getStorage(app);
const db = getFirestore(app);

// ====== DOM ELEMENT ======
const songList = document.getElementById("songList");


// ====== LOAD SONGS ON DASHBOARD ======
async function loadSongs() {
  songList.innerHTML = "Loading… 🔄";

  const folder = ref(storage, "artists_audio/");
  const files = await listAll(folder);

  if (!files.items.length) {
    songList.innerHTML = "<li>No songs uploaded yet</li>";
    return;
  }

  songList.innerHTML = ""; // clear loading text

  for (const fileRef of files.items) {
    const url = await getDownloadURL(fileRef);
    const filename = fileRef.name.replace(/^\d+-/, "");

    // ====== LOAD PLAY/VIEW STATS ======
    const statRef = doc(db, "stats", fileRef.name);
    let stats = await getDoc(statRef);

    if (!stats.exists()) {
      await setDoc(statRef, { plays: 0, views: 0 });
      stats = await getDoc(statRef);
    }

    const { plays, views } = stats.data();

    // ====== DISPLAY SONG ITEM ======
    const li = document.createElement("li");
    li.innerHTML = `
      🎵 <strong>${filename}</strong><br>
      ▶️ Plays: ${plays} &nbsp; 👁️ Views: ${views}<br><br>
      <button onclick="playSong('${fileRef.name}', '${url}')">PLAY</button>
      <hr style="opacity:0.3;margin-top:10px">
    `;
    songList.appendChild(li);
  }
}


// ====== PLAY SONG ======
window.playSong = async (filename, url) => {
  const audio = new Audio(url);
  audio.play();

  const statRef = doc(db, "stats", filename);

  await updateDoc(statRef, {
    plays: increment(1),
    views: increment(1)
  });

  loadSongs(); // refresh stats live
};


// ====== START WHEN PAGE LOADS ======
loadSongs();
