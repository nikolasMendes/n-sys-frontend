import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function ProtectedRoutes(props) {
  const { component: Component } = props;
  const navigate = useNavigate();

  const loggedInUser = localStorage.getItem("LoggedInUser");
  const parsedUser = JSON.parse(loggedInUser || '""');

  useEffect(() => {
    if (!parsedUser) {
      navigate("/");
    }
  }, []);

  return <Component />;
}
