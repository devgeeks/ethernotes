/**
 * @jsx React.DOM
 */

 /* jshint node: true */
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

    return (
      <div className={classes}>
        <Spinner width='30px' height='30px' pending={this.props.pending} />
        <form autoComplete='off' onSubmit={this.props.loginHandler}>
          <input id='username' type='text' name='username' autoCorrect='off' 
            autoCapitalize='off' placeholder='Username' tabIndex='1' />
          <input id='passphrase' type='password' name='passphrase' 
            placeholder='Passphrase' tabIndex='2' />

          <div className='buttons'>
            <a className='button submit' tabIndex='3' 
              onClick={this.props.loginHandler}>Login</a>
            <a className='button register' tabIndex='4'
              onClick={this.props.registerHandler}>Create Account &raquo;</a>
          </div>
          <input type='submit' className='hidden' />

        </form>
      </div>
    );
  }

});

module.exports = LoginForm;
