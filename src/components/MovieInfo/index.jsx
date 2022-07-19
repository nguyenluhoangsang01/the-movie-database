import PropTypes from "prop-types";
import React from "react";
import Button from "../Button";
import {
  Actions,
  Content,
  Heading,
  Overview,
  Poster,
  Text,
  Wrapper,
} from "./MovieInfo.style";

const MovieInfo = ({ title, overview, poster, slideChanged }) => {
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
              handleClick={() => console.log("Watch trailer!")}
            >
              Watch trailer
            </Button>
          </Actions>
        </Text>
        <Poster src={poster} alt={title} slideChanged={slideChanged} />
      </Content>
    </Wrapper>
  );
};

MovieInfo.propTypes = {
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default MovieInfo;
