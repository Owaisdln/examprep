import React, { useState } from "react";
import loginBg from "../image/logigBg.jpg";
import axios from "axios";
import { Link } from "react-router-dom";

const AdminLogin = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post(
      "http://localhost:5000/api/adminlogin/login",
      form
    );
    console.log(res.data);

    if (res.data.message == "Login Successfully") {
      localStorage.setItem("role", res.data.data.role);

      window.location.href = "/admindashboard";
    }
  };

  return (
    <div
      style={{ position: "relative", minHeight: "100vh", minWidth: "100vw" }}
    >
      {/* Blurred background image layer */}
      <div
        style={{
          backgroundImage: `url(${loginBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(3px)",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 0,
        }}
      />
      {/* Content layer */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          minHeight: "100vh",
          minWidth: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="text-white"
      >
        <form
          onSubmit={handleSubmit}
          style={{
            background: "rgba(255, 255, 255, 0.4)",
            padding: "2rem",
            borderRadius: "12px",
            boxShadow: "0 4px 32px rgba(0, 0, 0, 0.29)",
            minWidth: "500px",
            maxWidth: "100vw",
            // backdropFilter: "blur(1px)",
          }}
        >
          <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
            Admin Login
          </h2>
          <hr className="w-50 mx-auto mt-1" />
          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              style={{
                width: "100%",
                padding: "0.5rem",
                borderRadius: "6px",
                border: "1px solid #ccc",
                marginTop: "0.25rem",
              }}
              onChange={handleChange}
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              style={{
                width: "100%",
                padding: "0.5rem",
                borderRadius: "6px",
                border: "1px solid #ccc",
                marginTop: "0.25rem",
              }}
              onChange={handleChange}
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
    </div>
  );
};

export default AdminLogin;
