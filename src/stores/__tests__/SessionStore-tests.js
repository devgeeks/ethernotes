jest.dontMock('../SessionStore.js');
jest.dontMock('tinyvents');

describe('SessionStore', function() {
  var SessionStore;
  var callback;

  beforeEach(function() {
    NoteAppDispatcher = require('../../dispatcher/NoteAppDispatcher.js');
    SessionStore = require('../SessionStore.js');
    callback = NoteAppDispatcher.register.mock.calls[0][0];
  });

  it('should register a callback with the dispatcher', function() {
    expect(NoteAppDispatcher.register.mock.calls.length).toBe(1);
  });
});
