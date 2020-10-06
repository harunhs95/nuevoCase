import * as constants from './constants';

const initial_state = {
  data: [],
};

const reducers = (state = initial_state, action) => {
  switch (action.type) {
    case constants.SET_DATA: {
      return {
        ...state,
        data: action.data,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducers;
