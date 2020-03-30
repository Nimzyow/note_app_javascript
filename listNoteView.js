(function(exports) {
  function ListNoteView(listNote) {
    this.listNote = listNote;
  }

  ListNoteView.prototype.viewNote = function() {
    console.log(this.listNote);
    let stringToPlace;

    this.listNote.list.map(note => {
      console.log(note.text);
      stringToPlace = `<li><div>${note.text}</div></li>`;
    });
    let completeHTML = `<ul>${stringToPlace}</ul>`;
    return completeHTML;
  };
  exports.ListNoteView = ListNoteView;
})(this);
