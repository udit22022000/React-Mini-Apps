import React from "react";

const useFetch = (url) => {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => setError(true))
      .finally(() => setLoading(false));
  }, [url]);

  return [loading, error, data];
};

export { useFetch };
