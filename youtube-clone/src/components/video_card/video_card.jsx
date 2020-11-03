import React, { useEffect } from "react";
import style from './video_card.module.css';

const VideoCard = (props) => {
  useEffect(() => {
    console.log(props);
  })
  return (
    <div className={style.card}>
      <img className={style.img} src={props.video.snippet.thumbnails.maxres.url} alt="video-title"/>
      <div className={style.content}>
        <div className="channel-logo"></div>
        <div className={style.detail}>
          <div className={style['title']}>{props.video.snippet.title}</div>
          <div className={style['channel-name']}>{props.video.snippet.channelTitle}</div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
