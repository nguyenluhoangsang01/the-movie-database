import PropTypes from "prop-types";
import React from "react";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../api/config";
import { ImageSlide, StyledLink, Title } from "./MovieCard.style";

const MovieCard = ({ item, category }) => {
  return (
    <StyledLink to={`/${category}/${item.id}`}>
      <ImageSlide
        src={`${IMAGE_BASE_URL}/${POSTER_SIZE}/${item.poster_path}`}
        alt={item.title}
      />
      <Title>{item.title || item.name}</Title>
    </StyledLink>
  );
};

MovieCard.propTypes = {
  item: PropTypes.object.isRequired,
  category: PropTypes.string.isRequired,
};

export default MovieCard;
