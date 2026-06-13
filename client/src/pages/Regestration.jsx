import React from "react";
import loginBg from "../image/logigBg.jpg";

export default function Regestration() {
  return (
    <div
      className="container-fluid text-white"
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
    >
      <form
        style={{
          background: `linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.3)), url(${loginBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "2rem",
          borderRadius: "12px",
          boxShadow: "0 4px 32px rgba(0,0,0,0.2)",
          minWidth: "700px",
          maxWidth: "95vw",
          color: "#222",
          backdropFilter: "blur(10px)",
        }}
        className="text-white"
      >
        <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          Registration Form
        </h2>
        <table style={{ width: "100%" }}>
          <tbody>
            <tr>
              <td style={{ width: "48%", verticalAlign: "top" }}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  style={{
                    width: "95%",
                    marginBottom: "1rem",
                    marginRight: "1rem",
                    padding: "0.5rem",
                    borderRadius: "6px",
                    border: "1px solid #ccc",
                    marginTop: "0.25rem",
                  }}
                />
              </td>
              <td style={{ width: "48%", verticalAlign: "top" }}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  style={{
                    width: "95%",
                    marginBottom: "1rem",
                    marginLeft: "1rem",
                    padding: "0.5rem",
                    borderRadius: "6px",
                    border: "1px solid #ccc",
                    marginTop: "0.25rem",
                  }}
                />
              </td>
            </tr>
            <tr>
              <td style={{ width: "48%", verticalAlign: "top" }}>
                <label htmlFor="number">Number</label>
                <input
                  type="text"
                  id="number"
                  name="number"
                  required
                  style={{
                    width: "95%",
                    marginBottom: "1rem",
                    marginRight: "1rem",
                    padding: "0.5rem",
                    borderRadius: "6px",
                    border: "1px solid #ccc",
                    marginTop: "0.25rem",
                  }}
                />
              </td>
              <td style={{ width: "48%", verticalAlign: "top" }}>
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  style={{
                    width: "95%",
                    marginBottom: "1rem",
                    marginLeft: "1rem",
                    padding: "0.5rem",
                    borderRadius: "6px",
                    border: "1px solid #ccc",
                    marginTop: "0.25rem",
                  }}
                />
              </td>
            </tr>
            <tr>
              <td style={{ width: "48%", verticalAlign: "top" }}>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  style={{
                    width: "95%",
                    marginBottom: "1rem",
                    marginRight: "1rem",
                    padding: "0.5rem",
                    borderRadius: "6px",
                    border: "1px solid #ccc",
                    marginTop: "0.25rem",
                  }}
                />
              </td>
              <td style={{ width: "48%", verticalAlign: "top" }}>
                <label htmlFor="college">College</label>
                <input
                  type="text"
                  id="college"
                  name="college"
                  required
                  style={{
                    width: "95%",
                    marginBottom: "1rem",
                    marginLeft: "1rem",
                    padding: "0.5rem",
                    borderRadius: "6px",
                    border: "1px solid #ccc",
                    marginTop: "0.25rem",
                  }}
                />
              </td>
            </tr>
            <tr>
              <td style={{ width: "48%", verticalAlign: "top" }}>
                <label htmlFor="qualification">Qualification</label>
                <input
                  type="text"
                  id="qualification"
                  name="qualification"
                  required
                  style={{
                    width: "95%",
                    marginBottom: "1rem",
                    marginRight: "1rem",
                    padding: "0.5rem",
                    borderRadius: "6px",
                    border: "1px solid #ccc",
                    marginTop: "0.25rem",
                  }}
                />
              </td>
            </tr>
            <tr>
              <td colSpan={2} style={{ paddingTop: "1.5rem" }}>
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
                  Register
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}
