/**
 * @jsx React.DOM
 */

 /* jshint node: true */
 "use strict";

var React = require('react');
var SessionStore = require('../../stores/SessionStore.js');
var LoginForm = require('../LoginForm');

var Login = React.createClass({

  // This is a terrible idea and only here to support the fake login below
  getInitialState: function() {
    return this.props;
  },
  handleLogin: function(event) {
    event.preventDefault();
    console.log('LOGIN');
    // Fake the login process
    // ...this mutation of state will go away
    var _state = this.state;
    _state.pending = true;
    this.setState(_state);
    setTimeout(function() {
      _state.session = {};
      _state.pending = false;
      this.setState(_state);
    }.bind(this), 2000);
  },

  handleRegistration: function(event) {
    event.preventDefault();
    console.log('REGISTER');
    // Fake login
  },

  render: function() {
    var cx = React.addons.classSet;
    var classes = cx({
      'login': true,
      'dismissed': !!this.state.session // should be this.props.state.session
    });

    return (
      <div className={classes}>
        <h2>ethernotes</h2>
        <LoginForm
          pending={this.state.pending} // should be this.props.state.pending
          registerHandler={this.handleRegistration}
          loginHandler={this.handleLogin} />
      </div>
    );
  }

});

module.exports = Login;
