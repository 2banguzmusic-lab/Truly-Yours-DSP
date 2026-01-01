import { storage } from "./firebase-init.js";
import { ref, listAll, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-storage.js";

const songList = document.getElementById("songList");

async function loadSongs() {
  songList.innerHTML = "Loading…";

  const folder = ref(storage, "artists_audio/");
  const files = await listAll(folder);

  if (!files.items.length) {
    songList.innerHTML = "<li>No songs uploaded yet.</li>";
    return;
  }

  songList.innerHTML = "";

  for (const fileRef of files.items) {
    const url = await getDownloadURL(fileRef);
    const cleanName = fileRef.name.replace(/^\d+-/, "");

    songList.innerHTML += `
      <li>
        🎵 <strong>${cleanName}</strong><br>
        <audio controls src="${url}" style="width:95%; margin-top:5px;"></audio>
      </li><br>
    `;
  }
}

loadSongs();
