import React, { useEffect, useState } from 'react';
import { getPopularVideos } from '../../services/youtubeApi';
import VideoCard from '../video_card/video_card';
import style from './video_list.module.css';

const VideoList = () => {
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const list = await getPopularVideos();
        console.log(list);
        await setVideoList(list);
      } catch(err) {
        console.log('err', err);
        // setTimeout(() => fetchData(), 5000);
      }
    }
    fetchData();
  }, [])

  return (
    <div className={style.container}>
      {videoList ?
        videoList.map((x) =>
          <VideoCard video={x} key={x.id}/>
        ) : <h1>Loading...</h1>
      }
    </div>
  );
};

export default VideoList;