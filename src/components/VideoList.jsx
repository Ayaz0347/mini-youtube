import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos , onVideoSelected}) => {
  const rendredVideo = videos.map((video) => {
    return <VideoItem onVideoSelected={onVideoSelected} key={video.id.videoId} video={video}/>;
  });
  return <div className="ui relaxed divided list">{rendredVideo}</div>;
};
export default VideoList;