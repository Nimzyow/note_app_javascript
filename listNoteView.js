(function(exports) {
  function ListNoteView(listNote) {
    this.listNote = listNote;
  }

  ListNoteView.prototype.viewNote = function() {
    console.log(this.listNote);
    let stringToPlace = null;

    this.listNote.list.map(note => {
      if (stringToPlace == null) {
        stringToPlace = `<li><div>${note.text}</div></li>`;
      } else {
        stringToPlace += `<li><div>${note.text}</div></li>`;
      }
    });
    let completeHTML = `<ul>${stringToPlace}</ul>`;
    console.log(completeHTML);
    return completeHTML;
  };
  exports.ListNoteView = ListNoteView;
})(this);
