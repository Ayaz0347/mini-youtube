import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  const rendredVideo = videos.map((video) => {
    return <VideoItem key={video.id.videoId} myVideo={video}/>;
  });
  return <div>{rendredVideo}</div>;
};
export default VideoList;