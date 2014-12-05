var __ = require('../constants/NoteConstants.js');
var NoteAppDisatcher = require('../dispatcher/NoteAppDispatcher.js');

var SessionActions = {
  login: function(username, passphrase) {
    NoteAppDispatcher.handleServerAction({
      type: __.LOGIN,
      username: username,
      passphrase: passphrase
    });
  },
  logout: function(session) {
    NoteAppDispatcher.handleServerAction({
      type: __.LOGOUT,
      session: session,
    });
  }
};

module.exports = SessionActions;

