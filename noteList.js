(function(exports) {
  function NoteList() {
    this.list = [];
    this.COUNT = 0;
  }
  NoteList.prototype.getList = function() {
    return this.list;
  };
  NoteList.prototype.createAndStoreNote = function(
    text,
    note = new Note("", this.COUNT)
  ) {
    note.text = text;
    this.list.push(note);
    this.COUNT++;
  };
  exports.NoteList = NoteList;
})(this);
