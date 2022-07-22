import React, { useCallback, useEffect, useState } from "react";
import { BiArrowBack, BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import {
  BackButton,
  Content,
  Info,
  SearchButton,
  StyledInput,
  Wrapper,
} from "./SearchBar.style";
import PropTypes from "prop-types";

const SearchBar = ({ category, searchTerm, totalResults }) => {
  const [keyword, setKeyword] = useState("");
  let navigate = useNavigate();

  const handleSearch = useCallback(() => {
    if (keyword.trim().length > 0) {
      navigate(`/${category}/search/${keyword}`);
    }
  }, [keyword, navigate, category]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.keyCode === 13) {
        handleSearch();
        setKeyword("");
        window.scrollTo({ top: 0 });
      }
    };
    document.addEventListener("keypress", handleKeyPress);

    return () => document.removeEventListener("keypress", handleKeyPress);
  }, [handleSearch]);

  const handleChange = (e) => {
    setKeyword(e.currentTarget.value);
  };

  const handleClick = () => {
    handleSearch();
    setKeyword("");
    window.scrollTo({ top: 0 });
  };

  const handleBack = () => {
    navigate(-1);
    setKeyword("");
    window.scrollTo({ top: 0 });
  };

  return (
    <Wrapper>
      <BackButton onClick={handleBack}>
        <BiArrowBack />
      </BackButton>
      <Content>
        <StyledInput
          type="text"
          placeholder="Search movie..."
          value={keyword}
          onChange={(e) => handleChange(e)}
        />

        <SearchButton onClick={handleClick}>
          <BiSearch />
        </SearchButton>
      </Content>

      {searchTerm && (
        <Info>
          Show search results for <span>{searchTerm}</span> with a total of
          <span>{totalResults}</span> result{totalResults > 1 && "s"}.{" "}
        </Info>
      )}
    </Wrapper>
  );
};

SearchBar.propTypes = {
  category: PropTypes.string,
  searchTerm: PropTypes.string,
  totalResults: PropTypes.number,
};

export default SearchBar;
