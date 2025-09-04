import { useState } from "react";
import { loginUser } from "../services/authService";
const Login = ({ logged }) => {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      name: formData.get("name"),
      password: formData.get("password"),
    };
    event.target.reset();
    loginUser(data).logged === true && logged(data.name);
    setSuccess(loginUser(data).message);
  };

  return (
    <div className="container">
      <h1>Login</h1>
      {!!success ? (
        <h2>{success}</h2>
      ) : (
        <form onSubmit={handleSubmit} id="login-form" className="form">
          <div>
            <label htmlFor="name">Name: </label>
            <input name="name" id="name" placeholder="Jon Dou" required />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input
              name="password"
              id="password"
              placeholder="********"
              required
            />
          </div>
          <button type="submit" className="btn">
            Login now
          </button>
        </form>
      )}
    </div>
  );
};

export default Login;
