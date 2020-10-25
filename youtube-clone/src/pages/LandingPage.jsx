import React, { useEffect } from 'react';
import { getPopularVideos } from '../services/youtubeApi';

import VideoList from '../components/VideoList';

const LandingPage = () => {
  useEffect(() => {
    const fetchData = async () => {
      console.log(await getPopularVideos());
    }
    fetchData();
  })
  return (
    <div className="landingPage">
      <VideoList />
    </div>
  )
};

export default LandingPage;
