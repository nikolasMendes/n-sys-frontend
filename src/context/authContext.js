import { createContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

function AuthContextComponent(props) {
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const storeduser = localStorage.getItem("loggedInUser");

    const parsedStorageUser = JSON.parse(storeduser || '""');

    if (parsedStorageUser.token) {
      setLoggedInUser(parsedStorageUser);
    } else {
      setLoggedInUser(null);
    }
  }, []);
  return (
    <AuthContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthContextComponent };
