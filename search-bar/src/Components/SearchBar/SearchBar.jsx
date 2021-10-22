import React from "react";
import styled from "styled-components";

const SearchBarWrapper = styled.div`
  & {
    border: 1px solid black;
    border-radius: 20px;
    padding: 10px;
    display: flex;
    position: relative;
  }
`;

const IconImage = styled.img`
  padding-right: 20px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  flex: 1;
  font-size: 20px;
`;

const RightSide = styled.div`
  display: flex;
  flex: 0 0 auto;
  padding-right: 10px;
`;

const Spinner = styled.div`
  border: 2px solid #f3f3f3; /* Light grey */
  border-top: 2px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin-left: 5px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const SuggestionBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  max-height: 150px;
  overflow: auto;
  padding: 10px 20px 20px 10px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border: 1px solid black;

  & * {
    flex: 1;
    padding: 5px;
    text-align: left;
    padding-left: 30px;
  }
`;

const SearchBoxItem = styled.div`
  & {
    background-color: ${({ focus, index }) => {
      if (focus == index) {
        return "red";
      } else {
        return "transparent";
      }
    }};
  }
`;

const SearchBar = ({ loading, setLoading, suggestions, query, setQuery }) => {
  const [focus, setFocus] = React.useState("");
  const suggestionElement = React.useRef();

  const handleInputChange = (e) => {
    setLoading(true);
    setQuery(e.target.value);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const handleClear = () => {
    setQuery("");
    setLoading(false);
  };

  const handleKeyPress = (e) => {
    switch (e.keyCode) {
      case 38:
        setFocus(
          (prev) => (prev - 1 + suggestions.length) % suggestions.length
        );
        break;
      case 40:
        setFocus((prev) => (prev + 1) % suggestions.length);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <SearchBarWrapper>
        <IconImage
          src="https://static.thenounproject.com/png/105498-200.png"
          alt="icon"
          width="25px"
        />
        <Input onChange={handleInputChange} value={query} />
        <RightSide>
          {!loading && query && (
            <div onClick={handleClear} style={{ cursor: "pointer" }}>
              X
            </div>
          )}
          {loading && <Spinner />}
        </RightSide>
      </SearchBarWrapper>
      {!loading && suggestions.length >= 1 && (
        <SuggestionBox
          onKeyDown={handleKeyPress}
          tabIndex="0"
          ref={suggestionElement}
        >
          {suggestions.map((item, index) => {
            return (
              <SearchBoxItem
                key={item.country}
                onClick={() => setFocus(index)}
                focus={focus}
                index={index}
              >
                {item.country}
              </SearchBoxItem>
            );
          })}
        </SuggestionBox>
      )}
    </>
  );
};

export default SearchBar;
