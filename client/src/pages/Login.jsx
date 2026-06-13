import React, { useState } from "react";
import { Link } from "react-router-dom";
import loginBg from "../image/logigBg.jpg";
import axios from "axios";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
    console.log(data);
  }
  const handeleSubmit = async(e)=>{
    e.preventDefault();
    const res = await axios.post('http://localhost:5000/api/examinee/login', data)
    if (res.data.message == "Login Successfully") {
      localStorage.setItem("userRole", res.data.user.role);
      localStorage.setItem("userEmail", res.data.user.email);
      window.location.href = "/userdashboard/";
    }
  }
  return (
    <div
      style={{
        backgroundImage: `url(${loginBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        minWidth: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      className="text-white"
    >
      <form onSubmit={handeleSubmit}
        style={{
          background: `linear-gradient(rgba(255,255,255,0.25), rgba(255,255,255,0.25)), url(${loginBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "2rem",
          borderRadius: "12px",
          boxShadow: "0 4px 32px rgba(0, 0, 0, 0.29)",
          minWidth: "500px",
          maxWidth: "100vw",
          backdropFilter: "blur(10px)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          User Login
        </h2>
        <hr className="w-50 mx-auto mt-1" />
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={data.email}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: "6px",
              border: "1px solid #ccc",
              marginTop: "0.25rem",
            }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            value={data.password}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: "6px",
              border: "1px solid #ccc",
              marginTop: "0.25rem",
            }}
          />
        </div>
        <div style={{ marginBottom: "1rem", textAlign: "right" }}>
          <Link to="/regestration" style={{ color: "white", textDecoration: "underline" }}>
            Don't have an account?
          </Link>
        </div>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "0.75rem",
            borderRadius: "6px",
            background: "#007bff",
            color: "#fff",
            border: "none",
            fontWeight: "bold",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
