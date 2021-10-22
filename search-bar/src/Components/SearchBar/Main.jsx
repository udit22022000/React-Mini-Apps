import React from "react";
import SearchBar from "./SearchBar";
import countries from "../../utils/countries";
import useDebounce from "./useDebounce";
import useThrottle from "./useThrottle";

const Main = () => {
  const [query, setQuery] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const timeLimit = React.useRef(2000);

  //Debouncing
  //const [suggestions] = useDebounce({ timeLimit, countries, query });

  //Throttling
  const [suggestions] = useThrottle({ timeLimit, countries, query });

  return (
    <div>
      <h2>Search Bar</h2>
      <SearchBar
        loading={loading}
        setLoading={setLoading}
        query={query}
        setQuery={setQuery}
        suggestions={suggestions}
      />
    </div>
  );
};

export default Main;
