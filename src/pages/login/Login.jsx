import React from "react";
import { useDispatch } from "react-redux";
import { authtActions } from "../../store/authSlice";
 import "./login.css";


const Login = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authtActions.logIn());
  };
  return (
    <>
      <section className="login">
        <div className="container">
        <div className="text">
           <h3>Login</h3>
             </div>
           <form onSubmit={handleSubmit} className="form">
           
            <span> Username orEmail address</span>
            <input type="text" required />
            <span>Password *</span>
            <input type="Password" required />
            <button className="button">Login in </button>
          </form>
        </div>
      </section>
    </>
  );
};
export default Login;
