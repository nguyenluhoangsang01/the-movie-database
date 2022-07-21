import React, { useState } from "react";
import { GrSearch } from "react-icons/gr";
import Button from "../Button";
import { Content, StyledInput, Wrapper } from "./SearchBar.style";

const SearchBar = ({ category }) => {
  const [keyword, setKeyword] = useState("");

  return (
    <Wrapper>
      <Content>
        <StyledInput
          type="text"
          placeholder="Search movie..."
          value={keyword}
          onChange={(e) => setKeyword(e.currentTarget.value)}
        />

        <Button searchIcon>
          <GrSearch />
        </Button>
      </Content>
    </Wrapper>
  );
};

export default SearchBar;
