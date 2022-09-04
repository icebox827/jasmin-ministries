import React from 'react';
import YouTube from 'react-youtube';

function Video() {
  const VideoOnready = (e) => {
    e.target.pauseVideo();
  };

  const opts = {
    playerVars: {
      autoplay: true,
    },
  };

  return (
    <div className="container mx-auto">
      <div className="video-container">
        <YouTube
          videoId="LG8CC1CtzGA"
          opts={opts}
          onReady={VideoOnready}
        />
      </div>
    </div>

  );
}

export default Video;
