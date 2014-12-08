/* jshint node: true */
"use strict";

var __ = require('../constants/NoteConstants.js');
var NoteAppDispatcher = require('../dispatcher/NoteAppDispatcher.js');
var Tinyvents = require('tinyvents');

var CHANGE_EVENT = 'change';

var _state = {
  notes: [],
  note: {},
  error: '',
  pending: false
};

//var NoteStore = assign({}, EventEmitter.prototype, {
var NoteStore = {
  
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

Tinyvents.mixin(NoteStore);

NoteStore.dispatchToken = NoteAppDispatcher.register(function(payload) {

  var action = payload.action;
  console.log(action.type);

  switch(action.type) {
    case __.PENDING_REQUEST:
      console.log(payload);
      _state.pending = true;
      _state.error = '';
      break;

    case __.RECEIVE_NOTES:
      console.log(payload);
      _state.notes = action.response.notes;
      _state.pending = false;
      _state.error = action.response.error || '';
      break;

    case __.RECEIVE_NOTE:
      console.log(payload);
      _state.note = action.response.note;
      _state.pending = false;
      _state.error = action.response.error || '';
      break;

    case __.CREATE_NOTE:
      break;

    case __.DELETE_NOTE:
      break;

    case __.UPDATE_NOTE:
      break;

    case __.ARCHIVE_NOTE:
      break;

    default:
      return true;
  }

  NoteStore.emitChange();

  return true;
});

module.exports = NoteStore;
