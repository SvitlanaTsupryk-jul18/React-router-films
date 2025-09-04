import { useNavigate } from "react-router-dom";

const Header = ({ user }) => {
  const navigate = useNavigate();

  const openAction = (action) => {
    navigate("/" + action);
  };

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
