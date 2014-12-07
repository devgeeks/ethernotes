/**
 * @jsx React.DOM
 */

/* jshint node: true */
"use strict";

/**
 * React controller view
 */
var React = require('react');
var Navbar = require('../Navbar');
var Main = require('../Main');
var Login = require('../Login');
var AppActions = require('../../actions/NoteActionCreators');
var NoteStore = require('../../stores/NoteStore.js');
var SessionStore = require('../../stores/SessionStore.js');

var App = React.createClass({

  getInitialState: function() {
    return {
      notesState: NoteStore.getState(),
      sessionState: SessionStore.getState()
    };
  },

  componentDidMount: function() {
    NoteStore.on('change', this._onChange);
    SessionStore.on('change', this._onChange);
  },

  componentWillUnmount: function() {
    NoteStore.removeListener('change',this._onChange);
    SessionStore.removeListener('change',this._onChange);
  },

  _onChange: function() {
    this.setState({
      notesState: NoteStore.getState(),
      sessionState: SessionStore.getState()
    });
  },

  render: function() {
    return (
      <div className='app'>
        <Navbar title='Ethernotes' />
        <Main state={this.state.notesState} />
        <Login state={this.state.sessionState} />
      </div>
    );
  }

});

module.exports = App;
