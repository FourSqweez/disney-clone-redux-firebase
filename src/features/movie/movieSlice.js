import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	movies: [],
}

const movieSlice = createSlice({
	name: 'movie',
	initialState,
	reducers: {
		setMovies: (state, action) => {
			state.movies = action.payload
		},
	},
})

export const { setMovies } = movieSlice.actions // ใช้ เติม ข้อมูล

export const selectMovies = (state) => state.movie.movies // ใช้ ไว้ให้ ดึงข้อมูล

export default movieSlice.reducer // ใช้ เอา ไป สร้าง store
