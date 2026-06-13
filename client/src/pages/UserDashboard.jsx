import React from "react";
const Icon = ({ path, className }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d={path} />
  </svg>
);

const icons = {
  dashboard: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
  practice:
    "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
  mockExam:
    "M15.042 21.672L13.684 16.6m0 0l-2.51-2.222m2.51 2.222l2.222-2.51m-2.222 2.51L11.172 21.672M16.6 13.684l-2.222-2.51m2.222 2.51l2.51 2.222M13.684 16.6l2.222 2.51m-2.222-2.51l-2.51-2.222m2.51 2.222l-2.222 2.51m-2.51-2.222l-2.222-2.51m2.222 2.51l2.51 2.222M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  performance:
    "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  study: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20",
  settings:
    "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z",
};

export default function App() {
  const role = localStorage.getItem("userRole");
  if (role == "user") {
    var email = localStorage.getItem("userEmail");
  } else {
    window.location.href = "/";
  }
  return (
    <>
      <style>{styles}</style>
      <div className="dashboard-container">
        {/*  side bar  */}
        <aside className="sidebar">
          <div className="sidebar-header">
            <h2>EXAM PREP</h2>
          </div>
          <nav className="sidebar-nav">
            <ul>
              <li className="nav-category">Main Menu</li>
              <li className="active">
                <a href="#">
                  <Icon path={icons.dashboard} /> Dashboard
                </a>
              </li>
              <li>
                <a href="#">
                  <Icon path={icons.practice} /> Practice Tests
                </a>
              </li>
              <li>
                <a href="#">
                  <Icon path={icons.mockExam} /> Mock Exams
                </a>
              </li>
              <li>
                <a href="#">
                  <Icon path={icons.performance} /> Performance
                </a>
              </li>
              <li>
                <a href="#">
                  <Icon path={icons.study} /> Study Materials
                </a>
              </li>
              <li className="nav-category">Account</li>
              <li>
                <a href="#">
                  <Icon path={icons.settings} /> Settings
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Area */}
        <main className="main-content">
          <header className="header">
            <div className="header-title">
              <h1>User Dashboard</h1>
              <p>Keep up the great work, Jane!</p>
            </div>
            <div className="user-profile">
              <span>Jane Doe</span>
              <img
                src="https://placehold.co/40x40/E2E8F0/4A5568?text=JD"
                alt="User Avatar"
              />
            </div>
          </header>

          {/* Summary Cards */}
          <div className="summary-cards">
            <div className="card">
              <h3>Tests Taken</h3>
              <p className="amount">00</p>
              <p className="description">+3 this week</p>
            </div>
            <div className="card">
              <h3>Average Score</h3>
              <p className="amount">0%</p>
              <p className="description">+1.2% this month</p>
            </div>
            <div className="card">
              <h3>Time Spent Studying</h3>
              <p className="amount">0h 0m</p>
              <p className="description">+0h today</p>
            </div>
          </div>

          {/*  Recent Activity */}
          <div className="data-section">
            <div className="chart-container">
              <h3>Score Progression</h3>
              <div className="chart-placeholder">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/002/219/993/original/score-icon-free-vector.jpg"
                  alt="Line chart showing score progression"
                />
              </div>
            </div>

            <div className="recent-activity">
              <h3>Recent Activity</h3>
              <ul>
                <li>
                  <div className="activity-icon">✅</div>
                  <div className="activity-details">
                    <p>
                      <strong>Completed:</strong> Physics - Chapter 3 Test
                    </p>
                    <div className="time">15 minutes ago</div>
                  </div>
                </li>
                <li>
                  <div className="activity-icon">🎯</div>
                  <div className="activity-details">
                    <p>
                      <strong>Scored 85%</strong> in 'Algebra Full Mock Test'
                    </p>
                    <div className="time">2 hours ago</div>
                  </div>
                </li>
                <li>
                  <div className="activity-icon">📚</div>
                  <div className="activity-details">
                    <p>
                      <strong>Reviewed:</strong> 'Organic Chemistry Notes'
                    </p>
                    <div className="time">Yesterday</div>
                  </div>
                </li>
                <li>
                  <div className="activity-icon">🗓️</div>
                  <div className="activity-details">
                    <p>
                      <strong>Scheduled:</strong> 'Calculus Mock Exam' for
                      tomorrow
                    </p>
                    <div className="time">Yesterday</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

  body {
    margin: 0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    background-color: #f0f2f5;
    color: #1a202c;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .dashboard-container {
    display: flex;
    min-height: 100vh;
    width: 100%;
  }

  /* --- Sidebar Styles --- */
  .sidebar {
    width: 250px;
    background: linear-gradient(135deg, #31164cff 0%, #664770ff 100%);
    border-right: 1px solid #e2e8f0;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    transition: width 0.3s ease;
  }

  .sidebar-header {
    padding: 1.5rem;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
  }

  .sidebar-header h2 {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 700;
    color: #fff;
    letter-spacing: 0.5px;
    text-shadow: 0 2px 8px rgba(0,0,0,0.12);
  }

  .sidebar-nav {
    flex-grow: 1;
    padding: 1rem 0;
  }

  .sidebar-nav ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  
  .sidebar-nav .nav-category {
    padding: 0.5rem 1.5rem;
    font-size: 0.75rem;
    font-weight: 600;
    color: #e0e0e0;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .sidebar-nav li a {
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

  .sidebar-nav li a:hover {
    background: rgba(255,255,255,0.12);
    color: #fff;
  }

  .sidebar-nav li.active a {
    background: rgba(255,255,255,0.22);
    color: #fff;
    font-weight: 600;
    box-shadow: 0 4px 6px -1px rgba(172, 200, 223, 0.3), 0 2px 4px -1px rgba(148, 158, 167, 0.2);
  }

  /* --- Main Content Styles --- */
  .main-content {
    flex-grow: 1;
    padding: 2rem;
    overflow-y: auto;
    background-color: #f7fafc;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
  }
  
  .header-title h1 {
    margin: 0;
    font-size: 1.75rem;
    font-weight: 700;
    color: #2d3748;
  }
  
  .header-title p {
    margin: 4px 0 0;
    color: #718096;
  }

  .user-profile {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .user-profile img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.2);
  }
  
  .user-profile span {
    font-weight: 600;
    color: #2d3748;
  }

  /* --- Summary Cards --- */
  .summary-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  .card {
    background-color: #ffffff;
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.04);
    border: 1px solid #e2e8f0;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  
  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.07), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }

  .card h3 {
    margin-top: 0;
    font-size: 0.9rem;
    font-weight: 600;
    color: #718096;
  }

  .card .amount {
    font-size: 2.25rem;
    font-weight: 700;
    color: #2d3748;
    margin: 0.5rem 0;
  }

  .card .description {
    font-size: 0.875rem;
    color: #48bb78;
    margin-bottom: 0;
  }
  
  .card .description.red {
    color: #f56565;
  }

  /* --- Data Section (Charts & Activity) --- */
  .data-section {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 1.5rem;
  }

  .chart-container,
  .recent-activity {
    background-color: #ffffff;
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.04);
    border: 1px solid #e2e8f0;
  }

  .chart-container h3,
  .recent-activity h3 {
    margin-top: 0;
    border-bottom: 1px solid #e2e8f0;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    font-size: 1.1rem;
    font-weight: 600;
    color: #2d3748;
  }

  .chart-placeholder {
    width: 100%;
    height: 280px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .chart-placeholder img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 8px;
  }

  .recent-activity ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    max-height: 280px;
    overflow-y: auto;
  }

  .recent-activity li {
    display: flex;
    gap: 1rem;
    padding: 0.75rem 0.25rem;
    border-bottom: 1px solid #edf2f7;
  }

  .recent-activity li:last-child {
    border-bottom: none;
  }
  
  .activity-icon {
    font-size: 1.25rem;
    flex-shrink: 0;
  }
  
  .activity-details p {
    margin: 0;
    font-size: 0.9rem;
    color: #4a5568;
  }
  
  .activity-details p strong {
    color: #2d3748;
  }
  
  .activity-details .time {
    font-size: 0.8rem;
    color: #a0aec0;
    margin-top: 4px;
  }

  /* Responsive Adjustments */
  @media (max-width: 1024px) {
    .data-section {
      grid-template-columns: 1fr;
    }
  }
  
  @media (max-width: 768px) {
    .dashboard-container {
      flex-direction: column;
    }
    .sidebar {
      width: 100%;
      height: auto;
      border-right: none;
      border-bottom: 1px solid #e2e8f0;
    }
    .main-content {
      padding: 1.5rem;
    }
    .header {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }
  }
`;
