import React from 'react'
import { EventItem, EventItemProps } from './EventItem'

type EventListProps = {
  list: EventItemProps[]
}

export const EventList = ({ list, ...props }: EventListProps) => {
  return (
    <ul className="min-h-830 max-h-830 overflow-scroll" {...props}>
      {list.map(({ title, body, id, comment }) => (
        <EventItem key={id} id={id} title={title} body={body} comment={comment} />
      ))}
    </ul>
  )
}
