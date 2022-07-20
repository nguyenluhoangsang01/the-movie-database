import React from "react";
import { useParams } from "react-router-dom";
import { CATEGORY } from "../../api/config";
import MovieGrid from "../../components/MovieGrid";
import { CatalogContent, CatalogHeading, Wrapper } from "./Catalog.style";

const Catalog = () => {
  const { category } = useParams();

  return (
    <>
      <Wrapper>
        <CatalogHeading>
          {category === CATEGORY.movie ? "movies" : "tv series"}
        </CatalogHeading>
      </Wrapper>

      <CatalogContent>
        <MovieGrid />
      </CatalogContent>
    </>
  );
};

export default Catalog;
