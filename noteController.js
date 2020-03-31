(function(exports) {
  function NoteController(noteList = new NoteList()) {
    this.noteList = noteList;
    //this.listNote.createAndStoreNote("Favourite drink: seltzer");
    this.noteListView = new NoteListView(noteList);
  }

  NoteController.prototype.insertNote = function() {
    console.log(this.listNote);
    let noteDisplay = document.getElementById("app");
    noteDisplay.innerHTML = this.noteListView.viewNote();
  };

  exports.NoteController = NoteController;
})(this);
