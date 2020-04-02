(function(exports) {
  function NoteController(noteList = new NoteList()) {
    this.noteList = noteList;
    this.noteListView = new NoteListView(noteList);
    this.listenForSubmit();
  }

  NoteController.prototype.insertNote = function() {
    let noteDisplay = document.getElementById("app");
    noteDisplay.innerHTML = this.noteListView.viewNote();
    this.singleNoteView();
  };

  NoteController.prototype.listenForSubmit = function() {
    document.getElementById("text").addEventListener("submit", function(e) {
      console.log(e);
      console.log(e.target[0].value);
      e.preventDefault();
    });
  };

  NoteController.prototype.singleNoteView = function() {
    let noteControllerObject = this;
    window.addEventListener("hashchange", function() {
      this.getNoteFromUrl = function(location) {
        return location.hash.split("#note")[1];
      };

      this.showNote = function(id) {
        noteControllerObject.noteList.list.map(note => {
          if (note.id === Number(id)) {
            let snv = new SingleNoteView(note);
            let noteDisplay = document.getElementById("main");
            noteDisplay.innerHTML = snv.viewNote();
          }
        });
      };
      this.showNote(this.getNoteFromUrl(window.location));
    });
  };
  exports.NoteController = NoteController;
})(this);

//phases for note creation from browser.
let noteList = new NoteList();
noteList.createAndStoreNote("cor, im loving the quality of this note");
noteList.createAndStoreNote("brilliant note taking");
let ntController = new NoteController(noteList);
ntController.insertNote();
