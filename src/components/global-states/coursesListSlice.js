import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { db } from "../../firebase.config"
import { getDocs, collection } from "firebase/firestore"

const initialState = {
    list: [],
    status: "idle",
    error: null
}

export const fetchCourselist = createAsyncThunk('cousesList/fetchCourseList', async () => {
    const coursesCollection = collection(db, "courses")
    const res = await getDocs(coursesCollection)
    const data = await res.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
    }))
    console.log(data)
    return data
})

export const coursesListSlice = createSlice({
    name: 'coursesList',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchCourselist.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchCourselist.fulfilled, (state, action) => {
                state.status = 'succeeded',
                    state.list = action.payload
            })
            .addCase(fetchCourselist.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export const selectCoursesList = (state) => state.coursesList.list
export const selectCoursesListStatus = (state) => state.coursesList.status
export default coursesListSlice.reducer