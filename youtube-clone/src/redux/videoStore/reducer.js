import {
  UPDATE_VIDEO_LIST,
  INIT_VIDEO_LIST,
} from './type';

const initialState = {
  videos: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_VIDEO_LIST:
      return Object.assign({}, { ...state }, { videos: action.payload });
    case INIT_VIDEO_LIST:
      return Object.assign({}, { ...state }, { videos: [] });
    default:
      return state;
  }
}
