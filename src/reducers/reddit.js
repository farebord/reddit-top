import { RECEIVED_TOP, REQUEST_TOP, ERROR_FETCHING } from '../actions';

const initialState = {
  loading: false,
  fetched: false,
};

const redditTop = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_TOP:
      return {
        ...state,
        loading: true,
        fetched: false,
      };
    case RECEIVED_TOP:
      return {
        ...state,
        loading: false,
        fetched: true,
        ...action.payload,
      };
    case ERROR_FETCHING:
      return {
        loading: false,
        fetched: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default redditTop;
