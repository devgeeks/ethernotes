var __ = require('../constants/NoteConstants.js');
var NoteAppDisatcher = require('../dispatcher/NoteAppDispatcher.js');
var CryptonAPI = require('../utils/CryptonAPIUtils.js');

var NoteActions = {
  pending: function(message) {
    NoteAppDisatcher.handleViewAction({
      type: __.PENDING_REQUEST,
      message: message
    });
  },
  create: function(note) {
    NoteAppDispatcher.handleViewAction({
      type: __.NOTE_CREATE,
      note: note
    });
  },
  remove: function(id) {
    NoteAppDispatcher.handleViewAction({
      type: __.NOTE_DELETE,
      id: id
    });
  },
  update: function(id, note) {
    NoteAppDispatcher.handleViewAction({
      type: __.NOTE_UPDATE,
      id: id,
      note: note
    });
  },
  archive: function(id) {
    NoteAppDispatcher.handleViewAction({
      type: __.NOTE_ARCHIVE,
      id: id
    });
  },
  getNotes: function(params) {
    NoteAppDispatcher.handleViewAction({
      type: __.GET_NOTES,
      params: params
    });
  },
  getNote: function(id) {
    NoteAppDispatcher.handleViewAction({
      type: __.GET_NOTE,
      id: id
    });
  },
  receiveNotes: function(notes) {
    NoteAppDispatcher.handleServerAction({
      type: __.RECEIVE_NOTES,
      notes: notes
    });
  },
  receiveNote: function(note) {
    NoteAppDispatcher.handleServerAction({
      type: __.RECEIVE_NOTE,
      note: note
    });
  }
};

module.exports = NoteActions;
