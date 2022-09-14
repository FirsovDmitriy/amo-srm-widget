// import axios from "axios"


// export const fetchNotes = () => {
//   return async (dispatch) => {
//     const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${LIMIT}`)
//     dispatch({ type: 'INIT_NOTES', payload: data })
//   }
// }

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const LIMIT = 6

export const noteApi =  createApi({
  reducerPath: 'noteApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: build => ({
    getNotes: build.query({ query: () => `posts?_limit=${LIMIT}` })
  })
})

export const { useGetNotesQuery } = noteApi
