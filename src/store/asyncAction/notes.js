// import axios from "axios"


// export const fetchNotes = () => {
//   return async (dispatch) => {
//     const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${LIMIT}`)
//     dispatch({ type: 'INIT_NOTES', payload: data })
//   }
// }

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

const LIMIT = 6

export const notesApi =  createApi({
  reducerPath: 'notesApi',
  baseQuery: fetchBaseQuery({ baseUrl:  `https://jsonplaceholder.typicode.com/posts?_limit=${LIMIT}` }),
  // endpoints: (builder) => ({
  //   notesData: 
  // })
})

export const { getNotes } = notesApi