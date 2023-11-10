import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: []
}

export const searchedCoursesListSlice = createSlice({
    name: 'searchedCoursesList',
    initialState,
    reducers: {
        searchedCourseListChanged: (state, action) => {
            console.log(action.payload.list)
            state.list = action.payload.list
        }
    }
})

export default searchedCoursesListSlice.reducer
export const {searchedCourseListChanged} = searchedCoursesListSlice.actions
export const selectSearchedCourse = (state) => state.searchedCoursesList