import React from "react";
import { CATEGORY, MOVIE_TYPES, TV_TYPES } from "../../api/config";
import HeroSlider from "../../components/HeroSlider";
import MovieList from "../../components/MovieList";

const Home = () => {
  return (
    <>
      <HeroSlider />
      <MovieList
        title={`trending ${CATEGORY.movie}s`}
        category={CATEGORY.movie}
        type={MOVIE_TYPES.popular}
        link={CATEGORY.movie}
      />
      <MovieList
        title={`top rated ${CATEGORY.movie}s`}
        category={CATEGORY.movie}
        type={MOVIE_TYPES.top_rated}
        link={CATEGORY.movie}
      />

      <MovieList
        title={`trending ${CATEGORY.tv}`}
        category={CATEGORY.tv}
        type={TV_TYPES.popular}
        link={CATEGORY.tv}
      />
      <MovieList
        title={`top rated ${CATEGORY.tv}`}
        category={CATEGORY.tv}
        type={TV_TYPES.top_rated}
        link={CATEGORY.tv}
      />
    </>
  );
};

export default Home;
