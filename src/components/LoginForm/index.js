/**
 * @jsx React.DOM
 */

 /* jshint node: true */
/* global html10n, _ */
 "use strict";

var React = require('react');
var Spinner = require('../Spinner');
var __ = require('../../constants/NoteConstants.js');

var LoginForm = React.createClass({

  render: function() {
    var cx = React.addons.classSet;
    var classes = cx({
      'loginform': true,
      'pending': this.props.pending
    });
    var usernamePlaceholder = _('Username');
    var passphrasePlaceholder = _('Passphrase');

    return (
      <div className={classes}>
        <Spinner width='30px' height='30px' pending={this.props.pending} />
        <form autoComplete='off' onSubmit={this.props.loginHandler}>
          <input id='username' type='text' name='username' autoCorrect='off'
            autoCapitalize='off' placeholder={usernamePlaceholder} tabIndex='1'
            ref='username' />
          <input id='passphrase' type='password' name='passphrase'
            placeholder={passphrasePlaceholder} tabIndex='2'
            ref='passphrase' />

          <div className='buttons'>
            <a className='button submit' tabIndex='3'
              data-l10n-id='Login'
              onClick={this.props.loginHandler}>Login</a>
            <a className='button register' tabIndex='4'
              onClick={this.props.registerHandler}>
              <span data-l10n-id='Create Account'>Create Account</span>
              <span> &raquo;</span></a>
          </div>
          <input type='submit' className='hidden' />

        </form>
      </div>
    );
  }

});

module.exports = LoginForm;
