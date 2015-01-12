/**
 * @jsx React.DOM
 */

var App = require('./components/App');
var React = require('react/addons');
var attachFastClick = require('fastclick');
attachFastClick(document.body);

crypton.host = 'localhost';
crypton.port = 1025;

var languages = [navigator.language, "en"];

html10n.bind('indexed', function() {
  html10n.localize(languages);
});

html10n.bind('localized', function() {
  console.log("Localized");
  // This will change to react-router in the future
  React.render(
    <App />,
    document.getElementById('ethernotes')
  );
  // We use html10n.language instead of navigator.language
  //   so that it doesn't translate moment if we don't have
  //   string translations for that locale
  // if (moment) moment.locale([html10n.language]);
  document.documentElement.lang = html10n.getLanguage();
  document.documentElement.dir = html10n.getDirection();
});
