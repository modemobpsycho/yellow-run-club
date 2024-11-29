export const constants = {
  USER_LOCALSTORAGE: 'accessToken',
  GET_ACCESS_TOKEN: () => {
    return localStorage.getItem('accessToken');
  }
};
