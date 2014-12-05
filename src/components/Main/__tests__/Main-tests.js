/**
 * @jsx React.DOM
 */

jest.dontMock('../index.js');
describe('Main', function() {
  it('should work', function() {
    var React = require('react/addons');
    var Main = require('../index.js');
    var TestUtils = React.addons.TestUtils;

    var _state= {
      notes: [],
      pending: false,
      error: ''
    };

    var app = TestUtils.renderIntoDocument(
      <Main state={_state} />
    );
  });
});
