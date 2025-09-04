import { useState } from "react";
import { registerUser } from "../services/authService";

const Register = ({}) => {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };
    event.target.reset();
    setSuccess(registerUser(data));
  };
  return (
    <div className="container">
      <h1>Register</h1>
      {!!success ? (
        <h2>{success}</h2>
      ) : (
        <form onSubmit={handleSubmit} id="signup-form" className="form">
          <div>
            <label htmlFor="name">Name: </label>
            <input name="name" id="name" placeholder="Jon Dou" required />
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input
              name="email"
              id="email"
              placeholder="react@example.com"
              required
            />
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
            Register now
          </button>
        </form>
      )}
    </div>
  );
};

export default Register;
