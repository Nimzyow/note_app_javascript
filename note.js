(function(exports) {
  function MakeNote(text) {
    this.text = text;
  }
  MakeNote.prototype.getText = function() {
    return this.text;
  };
  exports.MakeNote = MakeNote;
})(this);
