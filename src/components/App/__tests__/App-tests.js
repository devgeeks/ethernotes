/**
 * @jsx React.DOM
 */

jest.dontMock('../index.js');
jest.dontMock('tinyvents');

describe('App', function() {
  it('should work', function() {
    var React = require('react/addons');
    var App = require('../index.js');
    var NoteStore = require('../../../stores/NoteStore.js');
    NoteStore.getState.mockReturnValue({notes:
      [
        {id: 'adc113d3a14de', text: 'lorem ipsum blah blah'},
        {id: 'aec32f12a234d', text: 'boopity bop bop, wah wah wah'}
      ],
      error: '',
      pending: true
    });
    var TestUtils = React.addons.TestUtils;

    var app = TestUtils.renderIntoDocument(
      <App />
    );
  });
});
