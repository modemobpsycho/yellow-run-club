import { actions, reducer, userState } from '../../src/store/slices/user.slice';
import { constants } from '../../src/common/helpers/constants';

describe('userSlice', () => {
  const initialState: userState = {
    token: 'testToken'
  };

  it('should handle logout', () => {
    const nextState = reducer(initialState, actions.logout());
    expect(nextState.token).toBeUndefined();
    expect(constants.GET_ACCESS_TOKEN()).toBeNull();
  });

  it('should handle setUser', () => {
    const nextState = reducer(initialState, actions.setUser('newToken'));
    expect(nextState.token).toEqual('newToken');
    expect(localStorage.getItem(constants.USER_LOCALSTORAGE)).toEqual('newToken');
  });
});
