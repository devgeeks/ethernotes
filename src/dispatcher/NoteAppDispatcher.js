/* jshint node: true */
"use strict";

var Dispatcher = require('flux').Dispatcher;
var assign = require('react/lib/Object.assign');

var VIEW_ACTION = 'VIEW_ACTION';
var SERVER_ACTION = 'VIEW_ACTION';

var NoteAppDispatcher = assign(new Dispatcher(), {
  handleViewAction: function(action) {
    this.dispatch({
      source: VIEW_ACTION,
      action: action
    });
  },
  handleServerAction: function(action) {
    this.dispatch({
      source: SERVER_ACTION,
      action: action
    });
  }
});

module.exports = NoteAppDispatcher;
