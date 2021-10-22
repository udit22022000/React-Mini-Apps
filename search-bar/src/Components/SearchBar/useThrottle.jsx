import React from "react";

const useThrottle = ({ timeLimit, countries, query }) => {
  const [suggestions, setSuggestions] = React.useState([]);
  const lastTime = React.useRef(Date.now());

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
      lastTime.current = Date.now();
    }, timeLimit.current - (Date.now() - lastTime.current));

    return () => {
      clearTimeout(timer);
    };
  }, [query, timeLimit, countries]);

  return [suggestions];
};

export default useThrottle;
