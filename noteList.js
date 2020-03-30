(function(exports) {
  function ListNote() {
    this.list = [];
  }
  ListNote.prototype.getList = function() {
    this.list.map(note => {
      console.log(note);
    });
  };
  ListNote.prototype.createAndStoreNote = function(text) {
    let note = new MakeNote(text);
    this.list.push(note);
  };
  exports.ListNote = ListNote;
})(this);
