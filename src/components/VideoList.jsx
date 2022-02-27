import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  const rendredVideo = videos.map((video) => {
    return <VideoItem key={video.id.videoId} myVideo={video}/>;
  });
  return <div className="ui relaxed divided list">{rendredVideo}</div>;
};
export default VideoList;