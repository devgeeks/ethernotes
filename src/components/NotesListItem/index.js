/**
 * @jsx React.DOM
 */

 /* jshint node: true */
 "use strict";

var React = require('react');
var React = require('react/addons');
var PureRenderMixin = React.PureRenderMixin;

var NotesListItem = React.createClass({
  mixins: [PureRenderMixin],

  render: function() {
    return (
      <li className='noteslistitem'>{this.props.text}</li>
    );
  }

});

module.exports = NotesListItem;
