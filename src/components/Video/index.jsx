import React, { useEffect, useRef } from "react";
import { YOUTUBE_VIDEO_URL } from "../../api/config";
import { Wrapper } from "./Video.style";

const Video = ({ item }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const height = (videoRef.current.offsetWidth * 9) / 16 + "px";
    videoRef.current.setAttribute("height", height);
  }, []);

  return (
    <Wrapper>
      <h2> {item.name} </h2>

      <iframe
        ref={videoRef}
        width="100%"
        src={`${YOUTUBE_VIDEO_URL}/${item.key}`}
        title={item.name}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </Wrapper>
  );
};

export default Video;
