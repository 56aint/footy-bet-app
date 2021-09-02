import GetEvent from '../api/apiCalls/Components/EventCall';

jest.mock('../api/apiCalls/Components/EventCall');

describe('EventCall', () => {
  test('should call the getEvent function', () => {
    GetEvent.mockImplementation(() => ({
      getEvent: jest.fn(),
    }));
    const eventCall = new GetEvent();
    eventCall.getEvent();
    expect(eventCall.getEvent).toHaveBeenCalled();
  });
});
