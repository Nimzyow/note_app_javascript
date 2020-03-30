(function(exports) {
  function ListNote() {
    this.list = [];
  }
  ListNote.prototype.getList = function() {
    return this.list;
  };
  ListNote.prototype.createAndStoreNote = function(
    text,
    note = new MakeNote("")
  ) {
    note.text = text;
    this.list.push(note);
  };
  exports.ListNote = ListNote;
})(this);
