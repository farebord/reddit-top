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

const buildUrlString = (limit, before, after) => {
  if(before)
    return `http://www.reddit.com/top/.json?&limit=${limit}&before=${before}`
  if(after)
    return `http://www.reddit.com/top/.json?&limit=${limit}&after=${after}`
  return `http://www.reddit.com/top/.json?&limit=${limit}`
}

export const fetchRedditTop = (limit, before, after) => async (dispatch) => {
  try {
    dispatch(fetchingRedditTop());
    const response = await fetch(buildUrlString(limit, before, after))
    const data = await response.json()
    return dispatch(fetchedRedditTop(data));
  } catch (error) {
    console.log(error)
    return dispatch(errorFetching(error));
  }
};
