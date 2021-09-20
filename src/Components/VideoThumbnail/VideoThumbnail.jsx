import React from 'react';
import './VideoThumbnail.scss';
import YouTube from 'react-youtube';
function VideoThumbnailCom() {
  const opts = {
    height: '690',
    width: '1240',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <section id="videoa" className="video">
      <YouTube videoId="Wjm82klcoxw" id="youtubea" />
    </section>
  );
}

export default VideoThumbnailCom;
