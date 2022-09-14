const notes = [
  {
    id: 1,
    title: "first note",
    body: "this is first note",
    updated: "2021-10-31T15:02:00.411Z",
  },
  {
    id: 2,
    title: "second note",
    body: "this is second note",
    updated: "2021-10-31T15:03:23.564Z",
  },
  {
    id: 3,
    title: "third note",
    body: "this is third note",
    updated: "2021-11-01T10:47:23.564Z",
  },
];

class NotesAPI {
  static getAllNotes() {
    const savedNotes = JSON.parse(localStorage.getItem("notes-app")) || []; //notes or JSON.parse(localStorage.getItem("notes-app"))
    return savedNotes.sort((a, b) => {
      return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
    });
  }
  static saveNote(noteToSave) {
    const notes = NotesAPI.getAllNotes(noteToSave);
    const existedNote = notes.find((n) => n.id == noteToSave.id);
    if (existedNote) {
      existedNote.title = noteToSave.title;
      existedNote.body = noteToSave.body;
      existedNote.updated = new Date().toISOString;
    } else {
      noteToSave.id = new Date().getTime;
      noteToSave.updated = new Date().toISOString;
      notes.push(noteToSave);
    }
    localStorage.setItem("notes-app", JSON.stringify(notes));
  }
  static deleteNote(id) {
    const notes = NotesAPI.getAllNotes();
    const filteredNotes = notes.filter((n) => n.id != id);
    localStorage.setItem("notes-app", JSON.stringify(filteredNotes));
  }
}

// console.log(
//   NotesAPI.saveNote({
//     id: 1,
//     title: "first edited note",
//     body: "this is first edited note",
//     updated: "2021-10-31T15:02:00.411Z",
//   })
// );
console.log(NotesAPI.deleteNote(3));
