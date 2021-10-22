import React from "react";
import axios from "axios";

const GitHub = () => {
  const [value, setValue] = React.useState("");
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  const searchUsers = () => {
    setIsLoading(true);
    axios
      .get("https://api.github.com/search/users", {
        params: {
          q: value,
        },
      })
      .then((res) => {
        setItems(res.data.items);
      })
      .catch((err) => {
        setIsError(true);
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        placeholder="Enter name"
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={searchUsers}>Submit</button>
    </div>
  );
};
export { GitHub };
