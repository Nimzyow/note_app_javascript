(function(exports) {
  function NoteController(listNote = new ListNote()) {
    this.listNote = listNote;
    //this.listNote.createAndStoreNote("Favourite drink: seltzer");
    this.listNoteView = new ListNoteView(listNote);
  }

  NoteController.prototype.insertNote = function() {
    console.log(this.listNote);
    let noteDisplay = document.getElementById("app");
    noteDisplay.innerHTML = this.listNoteView.viewNote();
  };

  exports.NoteController = NoteController;
})(this);
