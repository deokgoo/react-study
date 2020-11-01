import React, { useEffect, useState } from 'react';
import { getPopularVideos } from '../../services/youtubeApi';
import VideoCard from '../video_card/video_card';

const VideoList = () => {
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const list = await getPopularVideos();
        await setVideoList(list);
      } catch(err) {
        console.log('err', err);
        setTimeout(() => fetchData(), 2000);
      }
    }
    fetchData();
  }, [])

  return (
    <div className="video-list">
      {videoList ?
        videoList.map((x) =>
          <VideoCard video={x} key={x.id}/>
        ) : <h1>Loading...</h1>
      }
    </div>
  );
};

export default VideoList;