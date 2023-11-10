import { configureStore } from "@reduxjs/toolkit"
import coursesListReducer from "../global-states/coursesListSlice"
import currCourseIdReducer from "../global-states/currCourseSlice"
import searchedCoursesListReducer from "../global-states/searchedCoursesListSlice"

export const store = configureStore({
    reducer: {
        coursesList: coursesListReducer,
        currCourse: currCourseIdReducer,
        searchedCoursesList: searchedCoursesListReducer
    }
})
