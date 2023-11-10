import React from 'react'
import StudentCouseItem from './StudentCouseItem'
import { useSelector } from 'react-redux'
import { selectCoursesList } from './global-states/coursesListSlice'

const StudentDashboard = () => {
    const courseList = useSelector(selectCoursesList)
    const firstThreeElems = courseList.slice(0, 3);

    return (
        <>
            <div className="d-flex justify-content-center">
                <div className="container-md m-3">
                    <div className='d-flex flex-column'>
                        <h1>Student Dashboard</h1>
                    </div>
                    <div className="d-flex flex-row justify-content-center m-4" style={{ width: "100%" }}>
                        <div className="card mb-4">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="https://media.istockphoto.com/id/867390748/photo/cute-school-boy-outside-classroom.jpg?s=612x612&w=0&k=20&c=09nxiSU-XKBQBmDklG-pWQQQn9pePYcBx50VLvZDA10=" className="img-fluid rounded-start" style={{ maxHeight: "200px" }} alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Hello Rohan</h5>
                                        <p className="card-text">This is your personal Dashboard containing information about courses you have enrolled in. </p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex flex-column'>
                        <h3>Your Courses</h3>
                    </div>
                    <div className='d-flex flex-column justify-content-center' style={{ width: '100%' }}>
                        {firstThreeElems.map((elem) => {
                            return <StudentCouseItem course={elem} key={elem.id} />
                        })}
                    </div>

                </div>
            </div>
        </>
    )
}

export default StudentDashboard