// https://jsonplaceholder.typicode.com/posts

import axios from "axios"

export const fetchNotes = () => {
  return async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
    console.log(data)
  }
}
