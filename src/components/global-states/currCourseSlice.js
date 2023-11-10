import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    id: 0,
    name: '',
    instructor: '',
    description: '',
    enrollmentStatus: '',
    thumbnail: '',
    duration: '',
    schedule: '',
    location: '',
    prerequisites: ['', ''],
    syllabus: [],
}

export const currCourseSlice = createSlice({
    name: 'currCourse',
    initialState,
    reducers: {
        currCourseChange: (state, action) => {
            state.id = action.payload.id
            state.name = action.payload.name
            state.instructor = action.payload.instructor
            state.description = action.payload.description
            state.enrollmentStatus = action.payload.enrollmentStatus
            state.thumbnail = action.payload.thumbnail
            state.duration = action.payload.duration
            state.schedule = action.payload.schedule
            state.location = action.payload.location
            state.prerequisites = action.payload.prerequisites
            state.syllabus = action.payload.syllabus
        }
    }
})

export default currCourseSlice.reducer
export const { currCourseChange } = currCourseSlice.actions
export const selectCurrCourse = (state) => state.currCourse