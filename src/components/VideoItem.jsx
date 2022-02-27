import React from "react";
import './VideoItem.css';

const VideoItem = ({myVideo}) => {
  return (
    <div className=" video-item item">
        <img className="ui image" src={myVideo.snippet.thumbnails.medium.url} alt="" />
        <div className="content">
          <div className="header">
          {myVideo.snippet.title}
          </div>
          <div className="description">
          {myVideo.snippet.description}
          </div>
        </div>

    </div>
  )
}
export default VideoItem;