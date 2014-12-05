/**
 * @jsx React.DOM
 */

 /* jshint node: true */
 "use strict";

var React = require('react');
var NotesListItem = require('../NotesListItem');

var NotesList = React.createClass({

  render: function() {
    var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
    var cx = React.addons.classSet;
    var classes = cx({
      'noteslist': true,
      'pending': this.props.state.pending
    });

    var items = this.props.state.notes.map(function(note) {
      return (
        <NotesListItem key={note.id} text={note.text} />
      );
    });

    return (
      <div className={classes}>
        <div className='loading'>Loading...</div>
        <div className='list'>
          <ul>
            <ReactCSSTransitionGroup transitionName="animatedlistitem">
              {items}
            </ReactCSSTransitionGroup>
          </ul>
        </div>
      </div>
    );
  }

});

module.exports = NotesList;

