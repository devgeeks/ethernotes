/* jshint node: true */
"use strict";

var keyMirror = require('react/lib/keyMirror');

module.exports = keyMirror({
  NOTE_CREATE: null,      // Adds a new note and saves to a container
  NOTE_REMOVE: null,      // Removes an existing note container
  NOTE_UPDATE: null,      // Saves an edited note container
  NOTE_ARCHIVE: null,     // Move a note from the 'inbox' to the 'archive'
  PENDING_REQUEST: null,  // An async operation is pending
  PENDING_SESSION: null,  // An async session operation is pending
  GET_NOTES: null,        // Get all notes in the index contanier
  GET_NOTE: null,         // Get a single note from its container
  RECEIVE_NOTES: null,    // Receive notes from the server
  RECEIVE_NOTE: null,     // Receive a single note from the server
  LOGIN: null,            // Log in using crypton.authorize()
  LOGOUT: null,           // Log out from crypton session
  LOGGED_IN: null,        // Logged in, session available
  LOGGED_OUT: null        // Logged out, session destroyed
});
