import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import apiSettings from "../../api";
import Button from "../Button";
import MovieCard from "../MovieCard";
import {
  Content,
  ContentBody,
  ContentHeader,
  HeadingText,
  Wrapper,
} from "./MovieList.style";

const MovieList = ({ title, type, category, link }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const getList = async () => {
      let res = [];

      if (type === "similar") {
        res = await apiSettings.getSimilar(category);
      } else {
        res = await apiSettings.getList(category, type);
      }

      setList(res.results);
    };

    getList();
  }, [type, category]);

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
              <MovieCard item={item} category={category} />
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
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default MovieList;
