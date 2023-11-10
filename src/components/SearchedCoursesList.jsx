import React, { useEffect } from 'react'
import CourseItem from './CourseItem'
import { selectSearchedCourse } from './global-states/searchedCoursesListSlice'
import { useSelector } from 'react-redux'

const SearchedCoursesList = () => {
    const selectedCourses = useSelector(selectSearchedCourse)

    useEffect(() => {
        console.log("Hi")
        console.log(selectedCourses)
    }, [selectedCourses])

    return (
        <>
            <div className="d-flex justify-content-center mt-4">
                <div className="container">
                    {
                        selectedCourses.list.length > 0 && selectedCourses.list.map((course, index) => {
                            return <CourseItem course={course} key={index} />
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default SearchedCoursesList