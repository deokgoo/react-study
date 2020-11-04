import axios from 'axios';
const { REACT_APP_YOUTUBE_API_BASE_URL, REACT_APP_API_KEY }= process.env;

const httpClient = axios.create({
  baseURL: REACT_APP_YOUTUBE_API_BASE_URL,
  params: {
    key: REACT_APP_API_KEY,
  }
});

export const getPopularVideos = async () => {
  const response = await httpClient.request({
    url: '/videos',
    method: 'GET',
    params: {
      part: 'snippet',
      chart: 'mostPopular',
      maxResults: 25,
    }
  });
  return response.data.items;
};

export const searchVideo = async (query) => {
  const response = await httpClient.request({
    url: '/search',
    method: 'GET',
    params: {
      q: query,
      order: 'viewCount',
      maxResults: 25,
    }
  });
  return response.data.items;
};
