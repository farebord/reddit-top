export const REQUEST_TOP = 'REQUEST_TOP';
export const RECEIVED_TOP = 'RECEIVED_TOP';
export const ERROR_FETCHING = 'ERROR_FETCHING';

const fetchingRedditTop = () => ({
  type: REQUEST_TOP,
});

const fetchedRedditTop = data => ({
  type: RECEIVED_TOP,
  payload: data,
});

const errorFetching = error => ({
  type: ERROR_FETCHING,
  payload: error,
});

export const fetchRedditTop = (count) => async (dispatch) => {
  try {
    dispatch(fetchingRedditTop());
    const response = await fetch(`http://www.reddit.com/top/.json?count=${count}&limit=50`)
    const data = await response.json()
    return dispatch(fetchedRedditTop(data));
  } catch (error) {
    return dispatch(errorFetching(error));
  }
};
