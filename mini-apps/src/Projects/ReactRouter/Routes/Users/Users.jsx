import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = React.useState([]);
  const [pageno, setPageno] = React.useState(1);
  const [totalPage, setTotalPage] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);
  const [url, setUrl] = React.useState("");
  const isMounted = React.useRef();
  const location = useLocation();
  const history = useHistory();

  React.useEffect(() => {
    const url = new URLSearchParams(location.search);
    url.set("page", pageno);
    console.log(location.pathname + "?" + url.toString());
    setUrl(location.pathname + "?" + url.toString());
  }, [pageno]);

  React.useEffect(() => {
    if (isMounted.current) {
      history.push(url);
      fetchUsers();
    } else {
      isMounted.current = true;
    }
  }, [url]);

  const fetchUsers = () => {
    setIsLoading(true);
    axios
      .get("https://reqres.in/api/users", {
        params: {
          page: pageno,
        },
      })
      .then((res) => {
        setUsers(res.data.data);
        setTotalPage(res.data.total_pages);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handlePageChange = (val) => {
    setPageno(val);
  };

  return isLoading ? (
    <div>.....loading</div>
  ) : (
    <div>
      <h3>Users</h3>
      <div>
        {users.map(({ id, first_name, last_name }) => {
          return (
            <>
              <Link to={`/users/${id}`}>{first_name + "  " + last_name}</Link>
              <br />
            </>
          );
        })}
      </div>
      <div>
        {new Array(totalPage).fill(0).map((_, i) => (
          <button onClick={() => handlePageChange(i + 1)}>Click {i + 1}</button>
        ))}
      </div>
    </div>
  );
};

export { Users };
