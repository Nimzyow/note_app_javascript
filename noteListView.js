(function(exports) {
  function ListNoteView(listNote) {
    this.listNote = listNote;
  }

  ListNoteView.prototype.viewNote = function() {
    console.log(this.listNote);
    let stringToPlace = null;

    this.listNote.list.map(note => {
      let reducedText = this.reduceText(note.text);
      if (stringToPlace == null) {
        stringToPlace = `<li><div>${reducedText}</div></li>`;
      } else {
        stringToPlace += `<li><div>${reducedText}</div></li>`;
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
