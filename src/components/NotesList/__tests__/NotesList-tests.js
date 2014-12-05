/**
 * @jsx React.DOM
 */

jest.dontMock('../index.js');
describe('NotesList', function() {
  it('should work', function() {
    var React = require('react/addons');
    var NotesList = require('../index.js');
    var TestUtils = React.addons.TestUtils;

    var _state= {
      notes: [],
      pending: false,
      error: ''
    };

    var navbar = TestUtils.renderIntoDocument(
      <NotesList state={_state} />
    );
  });
});
