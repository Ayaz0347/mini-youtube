import React from "react";
import VideoList from "./VideoList";
  const VideoItem = ({myVideo}) => {
  return (
    <div>
        <img src={myVideo.snippet.thumbnails.medium.url} alt="" />
        {myVideo.snippet.description}
        </div>
  )
}
export default VideoItem;