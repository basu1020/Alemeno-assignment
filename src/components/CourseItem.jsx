import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { currCourseChange } from './global-states/currCourseSlice'

const CourseItem = (course) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onClickhandler = () => {
        dispatch(currCourseChange(course.course))
        navigate("/course-details")
    }
    
    return (
        <div className="card mb-4 custom-pointer m-auto" style={{ maxWidth: "800px" }} onClick={() => {onClickhandler()}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={course.course.thumbnail} className="img-fluid rounded-start" style={{ maxHeight: "200px" }} alt={course.course.name} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{course.course.name}</h5>
                        <p className="card-text">Instructor: {course.course.instructor}</p>
                        <p className="card-text">Duration: {course.course.duration}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseItem