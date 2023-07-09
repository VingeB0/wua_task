import { useQuery } from '@tanstack/react-query'
import { getEvents } from '../../../api/events'
import { QUERY_KEYS } from '../../query'
import { Event } from '../../../api/types'
import { EventItemProps } from '../../../tabs/events/EventItem'

const dataMapper = (data: (Event | EventItemProps)[]): EventItemProps[] => {
  return data.map((item) => {
    if ('userId' in item) {
      const { userId, ...event } = item as Event

      return { ...event, comment: false }
    }

    return item as EventItemProps
  })
}

export const useEvents = () => {
  const { data, ...query } = useQuery<Event[], Error>([QUERY_KEYS.EVENTS], getEvents, {
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  })

  return { data: dataMapper(data || []), ...query }
}
