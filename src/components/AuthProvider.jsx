import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [searchKey, setSearchKey] = useState("");
  const [data, setData] = useState([]);

  console.log(data);

  useEffect(() => {
    fetch("https://jsonplaceholder.org/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((users) => {
        setData(users);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  const authInfo = {
    searchKey,
    setSearchKey,
    data,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
