import { useState } from "react";
import reactLogo from "./assets/logo.svg";
import viteLogo from "/logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Regestration from "./pages/Regestration";
import UserDashboard from "./pages/UserDashboard";

import AdminLogin from "./Components/AdminLogin";
import AdminDashboard from "./Components/AdminDashboard";
import Examination from "./Components/Examination";
import Questionbank from "./Components/Questionbank";
import Examinee from "./Components/Examinee";
import Session from "./Components/Session";
import Subject from "./Components/Subject";
import DashboardHome from "./Components/DashboardHome";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        {/*components folder routes*/}
        <Route path="/" element={<Login />} />
        <Route path="/adlogin" element={<AdminLogin />} />
        <Route path="/admindashboard" element={<AdminDashboard />}>
          <Route index element={<DashboardHome />} />
          <Route path="session" element={<Session />} />
          <Route path="subject" element={<Subject />} />
          <Route path="examinee" element={<Examinee />} />
          <Route path="questionbank" element={<Questionbank />} />
          <Route path="examination" element={<Examination />} />
        </Route>

        {/*page folder routes*/}
        <Route path="/regestration" element={<Regestration />} />
        <Route path="/userdashboard" element={<UserDashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
