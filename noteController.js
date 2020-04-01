(function(exports) {
  function NoteController(noteList = new NoteList()) {
    this.noteList = noteList;
    this.noteListView = new NoteListView(noteList);
    this.makeUrlChangeShowNoteForCurrentPage();
  }

  NoteController.prototype.insertNote = function() {
    console.log(this.listNote);
    let noteDisplay = document.getElementById("app");
    noteDisplay.innerHTML = this.noteListView.viewNote();
  };

  NoteController.prototype.makeUrlChangeShowNoteForCurrentPage = function() {
    window.addEventListener("hashchange", this.showNoteForCurrentPage());
  };

  NoteController.prototype.showNoteForCurrentPage = function() {
    this.showNote(this.getNoteFromUrl(window.location));
  };

  NoteController.prototype.getNoteFromUrl = function(location) {
    console.log(location.hash.split("#")[1]);
    return location.hash.split("#")[1];
  };

  NoteController.prototype.showNote = function(note) {
    document.getElementById("main").innerHTML = "";
  };

  exports.NoteController = NoteController;
})(this);

let noteList = new NoteList();
noteList.createAndStoreNote("cor, im loving the quality of this note");
noteList.createAndStoreNote("brilliant note taking");
let ntController = new NoteController(noteList);
ntController.insertNote();
