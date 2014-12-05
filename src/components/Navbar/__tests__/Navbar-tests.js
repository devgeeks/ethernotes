/**
 * @jsx React.DOM
 */

jest.dontMock('../index.js');
describe('Navbar', function() {
  it('should work', function() {
    var React = require('react/addons');
    var Navbar = require('../index.js');
    var TestUtils = React.addons.TestUtils;

    var navbar = TestUtils.renderIntoDocument(
      <Navbar />
    );
  });
});
