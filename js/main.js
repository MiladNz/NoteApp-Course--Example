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
    const savedNotes = notes || []; //JSON.parse(localStorage.getItem("notes-app"))
    return savedNotes.sort((a, b) => {
      return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
    });
  }
  saveNote() {}
  deleteNote() {}
}

console.log(NotesAPI.getAllNotes());
