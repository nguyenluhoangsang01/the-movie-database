import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import apiSettings from "../../api";
import {
  BACKDROP_SIZE,
  CATEGORY,
  IMAGE_BASE_URL,
  MOVIE_TYPES,
  POSTER_SIZE,
} from "../../api/config";
import MovieInfo from "../MovieInfo";
import { ImgSide, Wrapper } from "./HeroSlider.style";

const HeroSlider = () => {
  const [movieList, setMovieList] = useState([]);
  const [slideChanged, setSlideChanged] = useState(true);

  useEffect(() => {
    const getMovieList = async () => {
      try {
        const res = await apiSettings.getList(
          CATEGORY.movie,
          MOVIE_TYPES.popular
        );

        setMovieList(res.results);
      } catch (err) {
        console.log(err);
      }
    };

    getMovieList();
  }, []);

  const handleSlideChange = () => {
    setSlideChanged(false);

    setTimeout(() => {
      setSlideChanged(true);
    }, 0);
  };

  return (
    <Wrapper>
      <Swiper onSlideChange={handleSlideChange}>
        {movieList.slice(0, Math.round(movieList.length / 2)).map((item) => (
          <SwiperSlide key={item.id}>
            <ImgSide
              src={`${IMAGE_BASE_URL}/${BACKDROP_SIZE}${item.backdrop_path}`}
            />
            <MovieInfo
              poster={`${IMAGE_BASE_URL}/${POSTER_SIZE}${item.poster_path}`}
              title={item.title}
              overview={item.overview}
              slideChanged={slideChanged}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrapper>
  );
};

export default HeroSlider;
