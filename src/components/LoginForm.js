import React, { useState, useEffect } from "react";
import axios from "axios";
import "./LoginForm.css";
import { Router, Route, withRouter, Redirect } from "react-router-dom";
import authHeader from "../service/auth-header";
import { useHistory } from "react-router-dom";
import { TextField, Typography, Button, Alert } from "@material-ui/core";

function LoginForm(props) {
  const history = useHistory();
  let data = [];
  const [state, setState] = useState({
    email: "",
    password: "",
    successMessage: null,
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    const payload = {
      email: state.email,
      password: state.password,
    };

    axios
      .post("/api/public/login", payload)
      .then(function (response) {
        console.log(response.data);
        if (response.status === 200) {
          setState((prevState) => ({
            ...prevState,
            successMessage: "Login successful. Redirecting to home page..",
          }));

          localStorage.setItem("user", JSON.stringify(response.data));

          const structures = () => {
            return axios
              .get("/api/structures", {
                headers: authHeader(),
              })
              .then(function (response) {
                data = response;
                console.log(data);
              });
          };

          structures();
        } else if (response.data.code === 204) {
          props.showError("Username and password do not match");
        } else {
          props.showError("Username does not exists");
        }
      })
      .then(() => {
        // REDIRECTING TO DASHBOARD console.log("redirect");
        history.push("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
      <form>
        <div className="form-group text-left">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={state.email}
            onChange={handleChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group text-left">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={state.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-check"></div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmitClick}
        >
          Submit
        </button>
      </form>
      <div
        className="alert alert-success mt-2"
        style={{ display: state.successMessage ? "block" : "none" }}
        role="alert"
      >
        {state.successMessage}
      </div>
    </div>
  );
}

export default withRouter(LoginForm);
