/* global crypton */
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
    dispatch(__.PENDING_SESSION, null, null);
    // authorize() with the Crypton server, then dispatch a SESSION_RESPONSE
    //   action type
    crypton.authorize(username, passphrase, function(err, session) {
      dispatch(__.SESSION_RESPONSE, {
        session: session,
        error: err || ''
      }, null);
    });
  },
  logout: function(user) {
    // dispatch a PENDING action type
    dispatch(__.PENDING_SESSION, null, null);
    // logout of the Crypton server, then dispatch a SESSION_RESPONSE action
    //   type
  },
  getNotes: function(params) {
    // dispatch a PENDING action type
    dispatch(__.PENDING_REQUEST, null, null);
    // fetch the note, then dispatch a RECEIVE_NOTES action type
    setTimeout(function() {
      // @FIXME: Send back some fake data for now...
      dispatch(__.RECEIVE_NOTES, {
        notes: [
          {id: 'adc113d3a14de', text: 'lorem ipsum blah blah'},
          {id: 'aec32f12a234d', text: 'boopity bop bop, wah wah wah'}
        ],
        error: undefined
      }, null);
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

