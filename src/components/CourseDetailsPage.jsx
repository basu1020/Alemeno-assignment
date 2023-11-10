import React from 'react'
import { useSelector } from 'react-redux';
import { selectCurrCourse } from './global-states/currCourseSlice';

const CourseDetailsPage = () => {
  const course = useSelector(selectCurrCourse)

  return (
    <div className="container mt-4">
      <h1>{course.name}</h1>

      <div className="card my-4">
        <div className="card-header">
          <h2>Course Details</h2>
        </div>
        <div className="card-body">
          <p><strong>Instructor:</strong> {course.instructor}</p>
          <p><strong>Description:</strong> {course.description}</p>
          <p><strong>Enrollment Status:</strong> {course.enrollmentStatus}</p>
          <p><strong>Duration:</strong> {course.duration}</p>
          <p><strong>Schedule:</strong> {course.schedule}</p>
          <p><strong>Location:</strong> {course.location}</p>
          <p><strong>Pre-requisites:</strong> {course.prerequisites}</p>

          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                  Syllabus
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  {course.description}
                  <ul className="list-group">
                    {course.syllabus.map(item => (
                      <li key={item.week} className="list-group-item">
                        <strong>Week {item.week}:</strong> {item.topic} - {item.content}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetailsPage