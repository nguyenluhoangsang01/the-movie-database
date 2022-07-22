import React, { memo } from "react";
import Modal from "../Modal";
import PropTypes from "prop-types";
import { YOUTUBE_VIDEO_URL } from "../../api/config";

const TrailerModal = ({ movieVideo, handleClick }) => {
  const firstMovieVideo = movieVideo[0];
  const videoUrl = `${YOUTUBE_VIDEO_URL}/${firstMovieVideo.key}`;

  return (
    <Modal handleClick={handleClick}>
      <iframe
        width="100%"
        height="500px"
        src={videoUrl}
        title={`${firstMovieVideo.site} | ${firstMovieVideo.name}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </Modal>
  );
};

TrailerModal.propTypes = {
  movieVideo: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default memo(TrailerModal);
