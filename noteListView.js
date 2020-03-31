(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList;
  }

  NoteListView.prototype.viewNote = function() {
    console.log(this.noteList);
    let stringToPlace = null;

    this.noteList.list.map(note => {
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

  NoteListView.prototype.reduceText = function(message) {
    if (message.length > 20) {
      return `${message.slice(0, 20)}...`;
    } else {
      return message;
    }
  };
  exports.NoteListView = NoteListView;
})(this);
