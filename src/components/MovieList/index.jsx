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
import { BiRightArrowAlt } from "react-icons/bi";

const MovieList = ({ title, type, category, link, id }) => {
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
          <Link to={link} onClick={() => window.scrollTo(0)}>
            <Button transparent boxShadowUnset border outline>
              View more
              <span>
                <BiRightArrowAlt />
              </span>
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
  id: PropTypes.string,
};

export default MovieList;
