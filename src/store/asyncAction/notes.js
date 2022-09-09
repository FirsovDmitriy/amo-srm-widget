import axios from "axios"

export const fetchNotes = () => {
  return async (dispatch) => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=2')
    console.log('DATA', data)
    dispatch({ type: 'INIT_NOTES', payload: data })
  }
}
