import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

function Video({ src, channel, description, song, likes, messages, shares }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const handleVideoClick = () => {
    // if playing, pause it
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
    // ifpaused, play it
  };
  return (
    <div className="video">
      <video
        onClick={handleVideoClick}
        ref={videoRef}
        className="video_player"
        loop
        src={src}
      />
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} messages={messages} shares={shares} />
    </div>
  );
}

export default Video;
