import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectCoursesList } from './global-states/coursesListSlice';
import { selectSearchedCourse } from './global-states/searchedCoursesListSlice';
import { searchedCourseListChanged } from './global-states/searchedCoursesListSlice';

const Navbar = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const coursesList = useSelector(selectCoursesList);
    const searchedCourses = useSelector(selectSearchedCourse)
    const [searchQuery, setSearchQuery] = useState("");
    // const [searchResults, setSearchResults] = useState(coursesList);

    const navigateToSearchPage = () => {
        navigate("/searched-results")
    }

    const handleSearch = async (e) => {
        e.preventDefault();

        // Filter courses based on the search query in the course name or instructor name
        const results = coursesList.filter(course =>
            course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            course.instructor.toLowerCase().includes(searchQuery.toLowerCase())
        );
        
        const list = results
        dispatch(searchedCourseListChanged({list}))
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">CodeClasses</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Courses</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/dashboard">Dashboard</Link>
                            </li>
                        </ul>
                        <form className="d-flex" 
                        onSubmit={(e) => {
                            handleSearch(e)
                            navigateToSearchPage()
                        }}
                            >
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search courses"
                                aria-label="Search"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button className="btn btn-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
