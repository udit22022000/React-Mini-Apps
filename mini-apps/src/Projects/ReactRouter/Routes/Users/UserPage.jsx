import React from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

const UserPage = () => {
  const [user, setUser] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const history = useHistory();
  const { userId } = useParams();

  React.useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = () => {
    setIsLoading(true);
    axios.get(`https://reqres.in/api/users/${userId}`).then((res) => {
      setUser(res.data.data);
      setIsLoading(false);
    });
  };

  const handleBack = () => {
    if (history.length > 2) {
      history.go(-1);
    } else {
      history.push("/users");
    }
    // history.replace("/users") //replacing the top of the stack....
  };

  return (
    <div>
      {isLoading ? (
        <div>is loading</div>
      ) : (
        <>
          <h3>{user.first_name + "  " + user.last_name}</h3>
          <button onClick={() => handleBack()}>GO Back</button>
        </>
      )}
    </div>
  );
};

export { UserPage };
