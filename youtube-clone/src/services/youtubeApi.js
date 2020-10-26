// import axios from 'axios';
const { REACT_APP_YOUTUBE_API_BASE_URL, REACT_APP_API_KEY }= process.env;

const requestApi = (url, method) => {
  const requestOptions = {
    method,
    redirect: 'follow',
  };

  return new Promise((resolve, reject) => {
    fetch(url, requestOptions)
      .then(res => resolve(res.json()))
      .catch(err => reject(err));
  })
}

export const getPopularVideos = async () => {
  console.log(process.env);
  const popularUrl = `${REACT_APP_YOUTUBE_API_BASE_URL}/videos?key=${REACT_APP_API_KEY}&part=snippet&chart=mostPopular&maxResults=25`;
  const method = 'GET';
  const responseData = await requestApi(popularUrl, method)
  return responseData.items;
}

// export const getSearchVideo = async (query) => {
//   const url = '';
// }
