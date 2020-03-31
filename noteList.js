(function(exports) {
  function NoteList() {
    this.list = [];
  }
  NoteList.prototype.getList = function() {
    return this.list;
  };
  NoteList.prototype.createAndStoreNote = function(text, note = new Note("")) {
    note.text = text;
    this.list.push(note);
  };
  exports.NoteList = NoteList;
})(this);
