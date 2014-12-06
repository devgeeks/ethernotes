/**
 * @jsx React.DOM
 */

 /* jshint node: true */
 "use strict";

var React = require('react/addons');
var PureRenderMixin = React.PureRenderMixin;
var NotesListItem = require('../NotesListItem');
var Spinner = require('../Spinner');

var NotesList = React.createClass({
  mixins: [PureRenderMixin],

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
        <div className='loading'>
          <Spinner inline='true' dark='true' width='10px' height='10px'
            pending={this.props.state.pending} /> Loading...
        </div>
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

