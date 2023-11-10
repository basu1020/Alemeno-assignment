// import { useState } from 'react'
import './App.css'
import CourseDetailsPage from './components/CourseDetailsPage';
import CoursesListing from './components/CoursesListing';
import Navbar from './components/Navbar'
import SearchedCoursesList from './components/SearchedCoursesList';
import StudentDashboard from './components/StudentDashboard'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<CoursesListing/>}/>
        <Route exact path="/dashboard" element={<StudentDashboard/>}/>
        <Route exact path="/course-details" element={<CourseDetailsPage/>}/>
        <Route exact path="/searched-results" element={<SearchedCoursesList />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
