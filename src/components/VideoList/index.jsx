import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiSettings from "../../api";
import Video from "../Video";
import { Content, Wrapper } from "./VideoList.style";

const VideoList = () => {
  const [videos, setVideos] = useState([]);

  const { category, id } = useParams();

  useEffect(() => {
    const getVideos = async () => {
      const res = await apiSettings.getVideos(category, id);

      setVideos(res.results);
    };

    getVideos();
  }, [category, id]);

  return (
    <Wrapper>
      <Content>
        {videos.slice(0, 5).map((item) => (
          <Video key={item.key} item={item} />
        ))}
      </Content>
    </Wrapper>
  );
};

export default VideoList;
