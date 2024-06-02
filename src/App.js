import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import StudentList from './components/StudentList';
import RegisterStudent from './components/RegisterStudent';
import EditStudent from './components/EditStudent';
import PrivateRoute from './PrivateRoute';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/studentList" element={<PrivateRoute><StudentList /></PrivateRoute>} />
        <Route path="/registerStudent" element={<PrivateRoute><RegisterStudent /></PrivateRoute>} />
        <Route path="/editStudent/:id" element={<PrivateRoute><EditStudent /></PrivateRoute>} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;