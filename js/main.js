import App from "./App.js";

const root = document.getElementById("app");
const app = new App(root);

// import NotesAPI from "./NotesAPI.js";
// import NotesView from "./NotesView.js";

// const view = new NotesView(app, {
//   onNoteAdd() {
//     console.log("note has been added.");
//   },
//   onNoteEdit(newTitle, newBody) {
//     console.log(newTitle, newBody);
//   },
//   onNoteSelect(noteId) {
//     console.log("onNoteSelect", noteId);
//   },
//   onNoteDelete(noteId) {
//     console.log("onNoteDelete", noteId);
//   },
// });

// view.updateNoteList(NotesAPI.getAllNotes());
// view.updateActiveNote(NotesAPI.getAllNotes()[1]);
