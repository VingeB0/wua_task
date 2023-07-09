import React from 'react'

export type EventItemProps = {
  id: number
  title: string
  body: string
  comment: boolean
}

export const EventItem = ({ title, body, id, comment, ...props }: EventItemProps) => {
  return (
    <li {...props} className={`py-5 px-8 border-b border-gray border-solid ${comment && 'animate-flash duration-300'}`}>
      <h4 className="mb-1 font-bold">{title}</h4>
      <p>{body}</p>
    </li>
  )
}
