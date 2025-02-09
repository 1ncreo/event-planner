import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/Auth/LoginForm";
import RegisterForm from "./components/Auth/RegisterForm";
import EventDashboard from "./components/Event/EventDashboard";
import EventForm from "./components/Event/EventForm";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EventDashboard />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/create-event" element={<EventForm />} />
      </Routes>
    </Router>
  );
};

export default App;
