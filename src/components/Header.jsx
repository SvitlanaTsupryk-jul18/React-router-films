import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Favorites from "../pages/Favorites";

const Header = ({ user }) => {
  //   const [action, setAction] = useState("");
  const navigate = useNavigate();

  const openAction = (action) => {
    // setAction(action);
    console.log("action", action);
    navigate("/" + action);
  };
  //   useEffect(() => {
  //   }, [action]);
  return (
    <header>
      <div className="container">
      <div className="logo"
        onClick={() => {
          openAction("");
        }}
      >
        Films
      </div>
      {console.log("2user", user.user)}
      {user ? (
        <div className="user">{user}</div>
      ) : (
        <div>
          <button
            type="button"
            name="favorites"
            className="header-btn"
            onClick={() => {
              openAction("favorites");
            }}
          >
            favorites
          </button>
          <button
            type="button"
            name="login"
            className="header-btn"
            onClick={() => {
              openAction("login");
            }}
          >
            Login
          </button>
          <button
            type="button"
            name="register"
            className="header-btn"
            onClick={() => {
              openAction("register");
            }}
          >
            Register
          </button>
        </div>
      )}
      </div>
    </header>
  );
};

export default Header;
