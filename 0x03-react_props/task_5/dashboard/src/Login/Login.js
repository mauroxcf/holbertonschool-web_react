import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <form>
          <label>
            Email: <input type="text" name="email" />
          </label>
          <label>
            Password: <input type="text" name="password" />
          </label>
          <button type="submit" value="submit">
            OK
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
