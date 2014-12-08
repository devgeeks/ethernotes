/* jshint node: true */
"use strict";

var __ = require('../constants/NoteConstants.js');
var NoteAppDispatcher = require('../dispatcher/NoteAppDispatcher.js');
var Tinyvents = require('tinyvents');

var CHANGE_EVENT = 'change';

var _state = {
  session: null,
  pending: false
};

var SessionStore = {

  getState: function() {
    return _state;
  },

  emitChange: function() {
    this.trigger(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.off(CHANGE_EVENT, callback);
  }
};

Tinyvents.mixin(SessionStore);

SessionStore.dispatchToken = NoteAppDispatcher.register(function(payload) {

  var action = payload.action;

  switch(action.type) {
    case __.PENDING_SESSION:
      console.log(payload);
      _state.pending = true;
      _state.error = '';
      break;

    case __.LOGIN:
      break;

    case __.LOGGED_IN:
      console.log(payload);
      _state.session = action.response.session;
      _state.pending = false;
      _state.error = action.response.error || '';
      break;

    case __.LOGOUT:
      break;

    case __.LOGGED_IN:
      break;

    default:
      return true;
  }

  SessionStore.emitChange();

  return true;
});

module.exports = SessionStore;
