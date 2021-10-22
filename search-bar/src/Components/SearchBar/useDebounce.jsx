import React from "react";

const useDebounce = ({ timeLimit, countries, query }) => {
  const [suggestions, setSuggestions] = React.useState([]);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (query === "") {
        setSuggestions([]);
      } else {
        let out = countries.filter((item) =>
          item.country.toLowerCase().indexOf(query.toLowerCase()) !== -1
            ? true
            : false
        );
        setSuggestions(out);
      }
    }, timeLimit.current);

    return () => {
      clearTimeout(timer);
    };
  }, [query, timeLimit, countries]);

  return [suggestions];
};

export default useDebounce;
