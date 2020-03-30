(function(exports) {
  function ListNoteView(listNote) {
    this.listNote = listNote;
  }

  ListNoteView.prototype.viewNote = function() {
    console.log(this.listNote);
    let stringToPlace = null;

    this.listNote.list.map(note => {
      console.log(note.text);
      if (stringToPlace == null) {
        stringToPlace = `<li><div>${note.text}</div></li>`;
      } else {
        stringToPlace += `<li><div>${note.text}</div></li>`;
      }
    });
    let completeHTML = `<ul>${stringToPlace}</ul>`;
    return completeHTML;
  };
  exports.ListNoteView = ListNoteView;
})(this);
