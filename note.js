(function(exports) {
  function Note(text, count) {
    this.text = text;
    this.id = count;
  }
  Note.prototype.getText = function() {
    return this.text;
  };
  exports.Note = Note;
})(this);
