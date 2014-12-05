/**
 * @jsx React.DOM
 */

 /* jshint node: true */
 "use strict";

var React = require('react');

var NotesListItem = React.createClass({

  render: function() {
    return (
      <li className='noteslistitem'>{this.props.text}</li>
    );
  }

});

module.exports = NotesListItem;
