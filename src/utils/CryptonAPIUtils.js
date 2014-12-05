/* jshint node: true */
"use strict";

var NoteAppDispatcher = require('../dispatcher/NoteAppDispatcher');
var NoteActionCreators = require('../actions/NoteActionCreators');
var __ = require('../constants/NoteConstants');

function dispatch(type, response, params) {
  var payload = {type: type, response: response};
  if (params) {
    payload.queryParams = params;
  }
  NoteAppDispatcher.handleServerAction(payload);
}

var CryptonAPI = {
  login: function(username, passphrase) {
    // dispatch a PENDING action type
    dispatch(__.PENDING_REQUEST, null, null);
    // authorize() with the Crypton server, then dispatch an LOGIN action type
  },
  logout: function(user) {
    // dispatch a PENDING action type
    dispatch(__.PENDING_REQUEST, null, null);
    // logout of the crypton server, then dispatch a LOGOUT action type
  },
  getNotes: function(params) {
    // dispatch a PENDING action type
    dispatch(__.PENDING_REQUEST, null, null);
    // fetch the note, then dispatch a RECEIVE_NOTES action type
    setTimeout(function() {
      // send back some fake data for now...
      dispatch(__.RECEIVE_NOTES,
        [
          {id: 'adc113d3a14de', text: 'lorem ipsum blah blah'},
          {id: 'aec32f12a234d', text: 'boopity bop bop, wah wah wah'}
        ], null);
    }, 1000);
  },
  getNote: function(id) {
    // dispatch a PENDING action type
    dispatch(__.PENDING_REQUEST, null, null);
    // fetch the note, then dispatch a RECEIVE_NOTE action type
    setTimeout(function(){
      dispatch(__.RECEIVE_NOTE, 
        {id: 'adc113d3a14de', text: 'lorem ipsum blah blah'},
        null);
    }, 1000);
  }
};

// Exports
module.exports = global.CryptonAPI = CryptonAPI;
