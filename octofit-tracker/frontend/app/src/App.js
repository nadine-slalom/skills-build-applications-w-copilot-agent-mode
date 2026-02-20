

import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import 'bootstrap/dist/css/bootstrap.min.css';
import OctofitLogo from './octofitapp-small.svg';

const App = () => (
  <Router>
    <div className="container mt-4">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary rounded mb-4">
        <div className="container-fluid flex-wrap">
          <NavLink className="navbar-brand d-flex align-items-center fw-bold me-4 mb-2 mb-lg-0" to="/">
            <img src={OctofitLogo} alt="OctoFit Logo" className="octofit-logo" />
            <span className="ms-2">OctoFit Tracker</span>
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse flex-grow-1" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item"><NavLink className="nav-link" to="/activities">Activities</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/leaderboard">Leaderboard</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/teams">Teams</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/users">Users</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/workouts">Workouts</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <Routes>
            <Route path="/activities" element={<Activities />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/users" element={<Users />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/" element={<div className="text-center"><h1 className="display-4 mb-4">Welcome to <span className="text-primary">OctoFit Tracker</span>!</h1><p className="lead">Track your fitness, join teams, and compete on the leaderboard.</p></div>} />
          </Routes>
        </div>
      </div>
    </div>
  </Router>
);

export default App;
