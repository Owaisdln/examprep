import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const AdminDashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const role = localStorage.getItem("role");
  if (role !== "admin") {
    window.location.href = "/adlogin";
    return null;
  }
  const email = localStorage.getItem("email");

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
      />
      <style>{`
        .admin-dashboard-container {
          display: flex;
          min-height: 100vh;
          width: 100%;
        }
        .admin-sidebar {
          width: ${collapsed ? "60px" : "250px"};
          background: linear-gradient(135deg, #61368bff 0%, #3c0845ff 100%);
          border-right: 1px solid #e2e8f0;
          display: flex;
          flex-direction: column;
          flex-shrink: 0;
          transition: width 0.3s ease;
          overflow: hidden;
        }
        .admin-sidebar-header {
          padding: 1.5rem;
          text-align: left;
          border-bottom: 1px solid #262729ff;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .sidebar-toggle {
          background: none;
          border: none;
          color: #fff;
          font-size: 1.5rem;
          cursor: pointer;
          margin-left: 8px;
        }
        .admin-sidebar-header {
          padding: 1.5rem;
          text-align: left;
          border-bottom: 1px solid #262729ff;
        }
        .admin-sidebar-header h2 {
          margin: 0;
          font-size: 1.25rem;
          font-weight: 700;
          color: #fff;
          letter-spacing: 0.5px;
          text-shadow: 0 2px 8px rgba(0,0,0,0.12);
        }
        .admin-sidebar-nav {
          flex-grow: 1;
          padding: 1rem 0;
        }
        .admin-sidebar-nav ul {
          list-style-type: none;
          padding: 0;
          margin: 0;
        }
        .admin-sidebar-nav li a {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 0.8rem 1.5rem;
          margin: 0.25rem 1rem;
          color: #fff;
          text-decoration: none;
          font-weight: 500;
          border-radius: 8px;
          transition: background-color 0.2s ease, color 0.2s ease;
        }
        .admin-sidebar-nav li a:hover {
          background: rgba(255,255,255,0.12);
          color: #fff;
        }
        .admin-sidebar-nav li.active a {
          background: rgba(255,255,255,0.22);
          color: #fff;
          font-weight: 600;
        }
        .admin-main-content {
          flex-grow: 1;
          padding: 2rem;
          overflow-y: auto;
          background-color: #f7fafc;
        }
        .admin-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }
        .admin-header-title h1 {
          margin: 0;
          font-size: 1.75rem;
          font-weight: 700;
          color: black;
        }
        .admin-header-title p {
          margin: 4px 0 0;
          color: #2b2929ff;
        }
        .admin-user-profile {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .admin-user-profile span {
          font-weight: 600;
          color: #black;
        }
        .admin-user-profile .admin-email {
          font-size: 0.9rem;
          color: #b1b1b1ff;
        }
      `}</style>
      <div className="admin-dashboard-container">
        {/* Sidebar Navigation */}
        <aside className="admin-sidebar">
          <div className="admin-sidebar-header">
            <h2 style={{ display: collapsed ? "none" : "block" }}>
              ADMIN PANEL
            </h2>
            <button
              className="sidebar-toggle"
              onClick={() => setCollapsed((prev) => !prev)}
            >
              {collapsed ? "☰" : <i className="fa-regular fa-circle-xmark"></i>}
            </button>
          </div>
          <nav className="admin-sidebar-nav">
            <ul>
              <li className="active">
                <Link to="">
                  {collapsed ? (
                    <i className="fas fa-home"></i>
                  ) : (
                    <>
                      <i className="fas fa-home"></i> Dashboard
                    </>
                  )}
                </Link>
              </li>
              <li>
                <Link to="session">
                  {collapsed ? (
                    <i className="fas fa-calendar-alt"></i>
                  ) : (
                    <>
                      <i className="fas fa-calendar-alt"></i> Session
                    </>
                  )}
                </Link>
              </li>
              <li>
                <Link to="subject">
                  {collapsed ? (
                    <i className="fas fa-book"></i>
                  ) : (
                    <>
                      <i className="fas fa-book"></i> Subject
                    </>
                  )}
                </Link>
              </li>
              <li>
                <Link to="examinee">
                  {collapsed ? (
                    <i className="fas fa-user"></i>
                  ) : (
                    <>
                      <i className="fas fa-user"></i> Examinee
                    </>
                  )}
                </Link>
              </li>
              <li>
                <Link to="questionbank">
                  {collapsed ? (
                    <i className="fas fa-question"></i>
                  ) : (
                    <>
                      <i className="fas fa-question"></i> Questionbank
                    </>
                  )}
                </Link>
              </li>
              <li>
                <Link to="examination">
                  {collapsed ? (
                    <i className="fas fa-file-alt"></i>
                  ) : (
                    <>
                      <i className="fas fa-file-alt"></i> Examination
                    </>
                  )}
                </Link>
              </li>
              <li>
                <Link to="#">
                  {collapsed ? (
                    <i className="fas fa-chart-bar"></i>
                  ) : (
                    <>
                      <i className="fas fa-chart-bar"></i> Result
                    </>
                  )}
                </Link>
              </li>
              <li>
                <Link to="#">
                  {collapsed ? (
                    <i className="fas fa-lock"></i>
                  ) : (
                    <>
                      <i className="fas fa-lock"></i> Change Password
                    </>
                  )}
                </Link>
              </li>
              <li>
                <Link
                  to="/adlogin"
                  onClick={() => {
                    localStorage.removeItem("role");
                    localStorage.removeItem("email");
                  }}
                >
                  {collapsed ? (
                    <i className="fas fa-sign-out-alt"></i>
                  ) : (
                    <>
                      <i className="fas fa-sign-out-alt"></i> Log out
                    </>
                  )}
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="admin-main-content">
          <header className="admin-header">
            <div className="admin-header-title">
              {/* <h1>Welcome, Admin</h1>
              <p>Manage your exam system here.</p> */}
            </div>
            <div className="admin-user-profile">
              <span>Admin</span>
              <span className="admin-email">{email}</span>
            </div>
          </header>
          <div className="admin-content">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
};

export default AdminDashboard;
