import React from "react";
import { Route, Routes, Navigate } from 'react-router-dom';
import NotFound from './components/NotFound'

// APP COMPONENTS
import Home from './components/Home'
import About from './components/About'
import Header from './components/Header';
import Teachers from './components/Teachers';
import Courses from './components/Courses';
import HTML from './components/courses/HTML'
import CSS from './components/courses/CSS'
import JavaScript from './components/courses/JavaScript'
import Featured from './components/Featured'

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/teachers/:topic/:name" element={<Featured />} />
        <Route path="/courses" element={<Courses />}>
          <Route index element={<Navigate replace={true} to="/courses/html" />} />
          <Route path ="/courses/html" element={<HTML />} />
          <Route path ="/courses/css" element={<CSS />} />
          <Route path ="/courses/javascript" element={<JavaScript />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
