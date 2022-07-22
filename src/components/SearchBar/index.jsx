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

const SearchBar = ({ searchTerm, totalResults }) => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const handleSearch = useCallback(() => {
    if (keyword.trim().length > 0) {
      navigate(`search/${keyword}`);
    }
  }, [keyword, navigate]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.keyCode === 13) {
        handleSearch();
        setKeyword("");
        window.scrollTo(0);
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
    window.scrollTo(0);
  };

  const handleBack = () => {
    navigate(-1);
    setKeyword("");
    window.scrollTo(0);
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
          <span>{totalResults}</span> result{totalResults > 1 && "s"}. Please
          back before searching again!
        </Info>
      )}
    </Wrapper>
  );
};

SearchBar.propTypes = {
  searchTerm: PropTypes.string,
  totalResults: PropTypes.number,
};

export default SearchBar;
