import PropTypes from "prop-types";
import React, { memo, useEffect, useState } from "react";
import apiSettings from "../../api";
import { CATEGORY } from "../../api/config";
import Button from "../Button";
import TrailerModal from "../TrailerModal";
import {
  Actions,
  Content,
  Heading,
  Overview,
  Poster,
  Text,
  Wrapper,
} from "./MovieInfo.style";

const MovieInfo = ({ id, title, overview, poster, slideChanged }) => {
  const [activeModal, setActiveModal] = useState(false);
  const [movieVideo, setMovieVideo] = useState([]);

  const handleClick = () => {
    setActiveModal((prevState) => !prevState);
  };

  useEffect(() => {
    const getMovieVideo = async () => {
      try {
        const res = await apiSettings.getVideos(CATEGORY.movie, id);

        setMovieVideo(res.results);
      } catch (err) {
        console.log(err);
      }
    };

    getMovieVideo();
  }, [id]);

  return (
    <Wrapper>
      <Content>
        <Text>
          <Heading slideChanged={slideChanged}>{title}</Heading>
          <Overview slideChanged={slideChanged}>{overview}</Overview>
          <Actions slideChanged={slideChanged}>
            <Button handleClick={() => console.log("Watch now!")}>
              Watch now
            </Button>
            <Button
              transparent
              boxShadowUnset
              border
              outline
              handleClick={handleClick}
            >
              Watch trailer
            </Button>
          </Actions>
        </Text>
        <Poster src={poster} alt={title} slideChanged={slideChanged} />

        {activeModal && (
          <TrailerModal movieVideo={movieVideo} handleClick={handleClick} />
        )}
      </Content>
    </Wrapper>
  );
};

MovieInfo.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  slideChanged: PropTypes.bool.isRequired,
};

export default memo(MovieInfo);
