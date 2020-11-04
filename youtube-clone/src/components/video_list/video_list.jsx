import React from 'react';
import VideoCard from '../video_card/video_card';
import style from './video_list.module.css';
import {shallowEqual, useSelector} from 'react-redux';

const VideoList = () => {
  const videoList = useSelector(state => {
    return state.videoStore.videos;
  }, shallowEqual);
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
