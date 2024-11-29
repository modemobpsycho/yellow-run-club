import { actions, reducer, jogState } from '../../src/store/slices/jog.slice';

describe('jogSlice', () => {
  const initialState: jogState = {
    dateTo: '',
    dateFrom: ''
  };

  it('should handle setDateTo', () => {
    const nextState = reducer(initialState, actions.setDateTo('2024-11-29'));
    expect(nextState.dateTo).toEqual('2024-11-29');
  });

  it('should handle setDateFrom', () => {
    const nextState = reducer(initialState, actions.setDateFrom('2024-11-30'));
    expect(nextState.dateFrom).toEqual('2024-11-30');
  });

  it('should handle resetDates', () => {
    const state = {
      dateTo: '2024-11-29',
      dateFrom: '2024-11-30'
    };
    const nextState = reducer(state, actions.resetDates());
    expect(nextState).toEqual(initialState);
  });
});
