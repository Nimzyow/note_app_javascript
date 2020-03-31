(function(exports) {
  function SingleNoteView(note) {
    this.note = note;
  }
  SingleNoteView.prototype.viewNote = function() {
    let message = this.note.getText();
    return `<div>${message}</div>`;
  };
  exports.SingleNoteView = SingleNoteView;
})(this);
