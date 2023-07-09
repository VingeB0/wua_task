import axios from 'axios'
import { Event } from './types'

export const getEvents = async () => {
  const { data } = await axios.get<Event[]>('https://jsonplaceholder.typicode.com/posts')

  return data
}
