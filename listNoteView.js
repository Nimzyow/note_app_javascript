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
  ListNoteView.prototype.reduceText = function(message) {
    if (message.length > 20) {
      return `${message.slice(0, 20)}...`;
    } else {
      return message;
    }
  };
  exports.ListNoteView = ListNoteView;
})(this);
