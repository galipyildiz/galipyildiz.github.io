document.addEventListener("DOMContentLoaded", () => {
  getNotes();
  const leaveNoteButton = document.getElementById("leaveNoteButton");
  leaveNoteButton.addEventListener("click", (event) => leaveButtonClick(event));
});

const leaveButtonClick = async (event) => {
  event.preventDefault();
  let userNoteInput = document.getElementById("noteTextArea");
  let newNote = userNoteInput.value.trim();
  if (newNote != "" && newNote.length >= 25) {
    await saveNote(newNote);
    userNoteInput.value = "";
    addNoteToPage(newNote);
  }
  if (newNote.length < 25) {
    alert("note too short");
  }
};

const addNoteToPage = (newNote) => {
  let notesDiv = document.getElementById("notes");
  let noteDiv = document.createElement("div");
  noteDiv.className += "box frame";
  noteDiv.innerText = newNote;
  let firstDiv = notesDiv.querySelector("div");
  notesDiv.insertBefore(noteDiv, firstDiv);
};

const getNotes = async () => {
  const Note = Parse.Object.extend("Notes");
  const query = new Parse.Query(Note);
  query
    .find()
    .then((results) => {
      results.sort((a, b) => {
        return b.createdAt - a.createdAt;
      });
      let notesDiv = document.getElementById("notes");
      for (const result of results) {
        let noteDiv = document.createElement("div");
        noteDiv.className += "box frame";
        noteDiv.innerText = result.attributes.text;
        noteDiv.style.maxWidth = "55vw"; //??
        noteDiv.style.overflowX = "auto";
        let createdAt = result.createdAt.toLocaleDateString("en-UK", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
        });
        let createdAtDiv = document.createElement("h4");
        createdAtDiv.innerText = createdAt;
        noteDiv.appendChild(createdAtDiv);

        notesDiv.appendChild(noteDiv);
      }
    })
    .catch((error) => {
      console.error("Hata:", error);
    });
};

const saveNote = async (noteText) => {
  const Note = Parse.Object.extend("Notes");
  const newNote = new Note();

  newNote.set("text", noteText);

  newNote
    .save()
    .then((result) => {
      console.log("Yeni not başarıyla eklendi:", result);
    })
    .catch((error) => {
      console.error("Hata:", error);
    });
};
