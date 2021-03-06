import React from 'react';
const VideoDetial = ({ video }) => {
    console.log(video)
    if (!video) {
        return <div></div>;
    }
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
        <div>
            <div className='ui embed'>
                <iframe src={videoSrc}></iframe>
            </div>
            <div className='ui segment'>

                <h4 className='ui header'>  {video.snippet.title}</h4>
                <p>  {video.snippet.description}</p>
            </div>
        </div>
    );
};
export default VideoDetial; 