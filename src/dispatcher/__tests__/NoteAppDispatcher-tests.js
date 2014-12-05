jest.autoMockOff();

describe('NoteAppDispatcher', function() {
  var NoteAppDispatcher;

  beforeEach(function() {
    NoteAppDispatcher = require('../NoteAppDispatcher.js');
  });

  it('sends actions to subscribers', function() {
    var listener = jest.genMockFunction();
    NoteAppDispatcher.register(listener);

    var payload = {};

    NoteAppDispatcher.dispatch(payload);
    expect(listener.mock.calls.length).toBe(1);
    expect(listener.mock.calls[0][0]).toBe(payload);
  });
});
