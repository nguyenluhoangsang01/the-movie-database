import PropTypes from "prop-types";
import React from "react";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../api/config";
import { ImageSlide, StyledLink, Title } from "./MovieCard.style";
import NoImage from "../../assets/images/no_image.jpg";

const MovieCard = ({ item, category }) => {
  return (
    <StyledLink
      to={`/${category}/${item.id}`}
      onClick={() => window.scrollTo(0)}
    >
      <ImageSlide
        src={
          item.poster_path
            ? `${IMAGE_BASE_URL}/${POSTER_SIZE}/${item.poster_path}`
            : NoImage
        }
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
