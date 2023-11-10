import React from 'react'
import { useSelector } from 'react-redux'
import { selectCoursesList } from './global-states/coursesListSlice'
import CourseItem from './CourseItem'

const CoursesListing = () => {
  const coursesList = useSelector(selectCoursesList)

  return (
    <>
      <div className="d-flex justify-content-center mt-4">
        <div className="container">
          {coursesList.map((course, index) => {
            return <CourseItem course={course} key={index} />
          })}

        </div>
      </div>
    </>
  )
}

export default CoursesListing