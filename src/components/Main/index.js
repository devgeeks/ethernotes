/**
 * @jsx React.DOM
 */

/* jshint node: true */
"use strict";

var React = require('react');
var NotesList = require('../NotesList');

var Main = React.createClass({

  render: function() {
    return (
      <div className='main'>
        <NotesList state={this.props.state} />
      </div>
    );
  }
});

module.exports = Main;
