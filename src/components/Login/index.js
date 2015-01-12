/**
 * @jsx React.DOM
 */

 /* jshint node: true */
 "use strict";

var React = require('react');
var CryptonAPI = require('../../utils/CryptonAPIUtils.js');
var SessionStore = require('../../stores/SessionStore.js');
var LoginForm = require('../LoginForm');

var Login = React.createClass({

  handleLogin: function(event) {
    event.preventDefault();
    console.log('LOGIN');
    var loginForm = this.refs.loginForm;
    // Trim usernames
    var username = loginForm.refs.username.getDOMNode().value.trim();
    // Spaces are valid in passphrases... don't trim
    var passphrase = loginForm.refs.passphrase.getDOMNode().value;
    if (!username || !passphrase) {
      return;
    }
    CryptonAPI.login(username, passphrase);
  },

  handleRegistration: function(event) {
    event.preventDefault();
    console.log('REGISTER');
  },

  render: function() {
    var cx = React.addons.classSet;
    var classes = cx({
      'login': true,
      'dismissed': !!this.props.state.session
    });

    // @TODO: Needs an error handling component of some kind
    return (
      <div className={classes}>
        <h2 data-l10n-id='Ethernotes'>Ethernotes</h2>
        <LoginForm
          ref='loginForm'
          pending={this.props.state.pending}
          registerHandler={this.handleRegistration}
          loginHandler={this.handleLogin} />
      </div>
    );
  }

});

module.exports = Login;
