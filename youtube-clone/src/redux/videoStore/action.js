import {
  UPDATE_VIDEO_LIST,
  INIT_VIDEO_LIST,
} from './type';
import {getPopularVideos, searchVideo} from "../../services/youtubeApi";

const updateVideoList = (videos) => {
  return {
    type: UPDATE_VIDEO_LIST,
    payload: videos,
  };
};

export const initVideoList = () => {
  return {
    type: INIT_VIDEO_LIST,
  };
};

export const updateVideoPopularList = async () => {
  try {
    const videos = await getPopularVideos();
    return updateVideoList(videos);
  } catch(err) {
    console.log(err);
  }
};

export const searchVideoList = async (query) => {
  try {
    const videos = await searchVideo(query);
    return updateVideoList(videos);
  } catch(err) {
    console.log(err);
  }
};
