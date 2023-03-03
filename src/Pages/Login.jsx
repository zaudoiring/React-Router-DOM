import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Login({ setUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const formHandler = (e) => {
    e.preventDefault();
    if (!name || !email) return;
    setUser(name);
    navigate("/dashboard");
  };
  return (
    <div className="col-md-3 offset-md-3">
      <form onSubmit={formHandler}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder=" Enter your Name"
          className="form-control rounded-0 "
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder=" Enter your Email"
          className="form-control rounded-0 mt-2"
        />

        <button
          type="submit"
          className="btn btn-danger btn-sm text-white mt-4 "
        >
          {" "}
          Login
        </button>
      </form>
    </div>
  );
}
export default Login;
