import React, { useEffect } from "react";

const VideoCard = (props) => {
  useEffect(() => {
    console.log(props);
  })
  return <div>
    <img src={props.video.snippet.thumbnails.high.url} alt=""/>
    {props.video.snippet.title}
  </div>;
};

export default VideoCard;
