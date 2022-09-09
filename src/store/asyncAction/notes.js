import axios from "axios"

const LIMIT = 6

export const fetchNotes = () => {
  return async (dispatch) => {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${LIMIT}`)
    dispatch({ type: 'INIT_NOTES', payload: data })
  }
}
