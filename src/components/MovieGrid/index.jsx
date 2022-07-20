import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiSettings from "../../api";
import { CATEGORY, MOVIE_TYPES, TV_TYPES } from "../../api/config";
import Button from "../Button";
import MovieCard from "../MovieCard";
import { Content, Wrapper } from "./MovieGrid.style";

const MovieGrid = () => {
  const [item, setItem] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalResults, setTotalResults] = useState(0);
  const itemLength = item.length;

  const { category, keyword } = useParams();

  useEffect(() => {
    const getList = async () => {
      let res = [];

      if (keyword === undefined) {
        if (category === CATEGORY.movie) {
          res = await apiSettings.getList(category, MOVIE_TYPES.upcoming);
        } else {
          res = await apiSettings.getList(category, TV_TYPES.popular);
        }
      } else {
        res = await apiSettings.getSearch(category, keyword);
      }

      setItem(res.results);
      setPage(res.page);
      setTotalPages(res.total_pages);
      setTotalResults(res.total_results);
    };

    getList();
  }, [category, keyword]);

  const handleClick = async () => {
    let res = [];

    if (keyword === undefined) {
      if (category === CATEGORY.movie) {
        res = await apiSettings.getList(
          category,
          MOVIE_TYPES.upcoming,
          page + 1
        );
      } else {
        res = await apiSettings.getList(category, TV_TYPES.popular, page + 1);
      }
    } else {
      res = await apiSettings.getSearch(category, keyword);
    }

    setItem((prevState) => [...prevState, ...res.results]);
    setPage(page);
    setTotalPages(res.total_pages);
    setTotalResults(res.total_results);
  };

  return (
    <Wrapper>
      <Content>
        {item.map((item) => (
          <MovieCard key={item.id} item={item} category={category} />
        ))}
      </Content>

      {page < totalPages && itemLength <= totalResults && (
        <Button
          transparent
          boxShadowUnset
          border
          outline
          handleClick={handleClick}
        >
          Load More {itemLength}/{totalResults}
        </Button>
      )}
    </Wrapper>
  );
};

export default MovieGrid;
