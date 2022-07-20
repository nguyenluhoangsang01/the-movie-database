import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import apiSettings from "../../api";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../api/config";
import Button from "../Button";
import {
  Content,
  ContentBody,
  ContentHeader,
  HeadingText,
  ImageSlide,
  StyledLink,
  Title,
  Wrapper,
} from "./MovieList.style";

const MovieList = ({ title, type, category, id, link }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const getList = async () => {
      let res = [];

      if (type === "similar") {
        res = await apiSettings.getSimilar(category, id);
      } else {
        res = await apiSettings.getList(category, type);
      }

      setList(res.results);
    };

    getList();
  }, [type, category, id]);

  return (
    <Wrapper>
      <Content>
        <ContentHeader>
          <HeadingText>{title}</HeadingText>
          <Link to={link}>
            <Button transparent boxShadowUnset border outline>
              View more
            </Button>
          </Link>
        </ContentHeader>

        <ContentBody grabCursor spaceBetween={10} slidesPerView={"auto"}>
          {list.map((item) => (
            <SwiperSlide key={item.id}>
              <StyledLink to={`/${category}/${id}`}>
                <ImageSlide
                  src={`${IMAGE_BASE_URL}/${POSTER_SIZE}/${item.poster_path}`}
                  alt={item.title}
                />
                <Title>{item.title || item.name}</Title>
              </StyledLink>
            </SwiperSlide>
          ))}
        </ContentBody>
      </Content>
    </Wrapper>
  );
};

MovieList.propTypes = {
  type: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default MovieList;
