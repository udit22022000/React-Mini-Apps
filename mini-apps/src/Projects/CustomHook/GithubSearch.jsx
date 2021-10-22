import React from "react";
import { useFetch } from "./useFetch";

const GithubSearch = () => {
  const [query, setQuery] = React.useState("");

  const [loading, error, data] = useFetch(
    `https://api.github.com/search/users?q=${query || "masai"}`
  );

  console.log(loading, data, error);
  return (
    <div>
      <h3>Github Search</h3>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter Query"
      />
      <br />

      <br />
      <div>
        {loading ? (
          <h3>loading</h3>
        ) : error ? (
          <div>Error</div>
        ) : (
          <div>{data && data.items.map(({ login }) => <h3>{login}</h3>)}</div>
        )}
      </div>
    </div>
  );
};

export { GithubSearch };
