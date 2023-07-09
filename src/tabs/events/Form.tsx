import React, { useCallback, useState } from 'react'
import { useEventsCache } from '../../services'

const gradient: string =
  'relative before:right-0 before:left-0 before:-top-2 before:content before:absolute before:w-full before:h-2 before:bg-gradient-to-t before:from-grayGradientStart before:to-grayGradientEnd before:opacity-40'
const animation: string = 'transition-opacity duration-300 ease-linear hover:opacity-80'

const makeNewComment = ({ body = '' }: { body: string }) => {
  return {
    id: Date.now(),
    title: 'Коментар',
    comment: true,
    body: body,
  }
}

type FormProps = {
  increaseEvents: React.Dispatch<React.SetStateAction<number>>
}

export const Form = ({ increaseEvents, ...props }: FormProps) => {
  const [error, setError] = useState<string>('')
  const { handleAddEvent } = useEventsCache()

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      setError('')
      const formData = new FormData(event.currentTarget)
      const body = formData.get('comment') as string
      if (!body.trim()) {
        setError('Поле не може бути пустим')

        return false
      }
      const newComment = makeNewComment({ body })
      handleAddEvent(newComment)
      increaseEvents((prev) => prev + 1)
      event.currentTarget.reset()
    },
    [increaseEvents, setError, handleAddEvent]
  )

  return (
    <form {...props} onSubmit={handleSubmit} className={`mt-auto py-5 px-8 ${gradient}`} method="POST" action="/">
      <div className="flex items-stretch gap-3 relative">
        <input
          className="py-1 px-3 w-full border-solid border-darkGray border text-19 text-black placeholder-darkGray"
          type="text"
          name="comment"
          placeholder="Додайте коментар"
        />
        <button className={`font-bold text-17 bg-primaryBlue text-white py-2 px-5 rounded-5 ${animation}`}>
          Додати
        </button>
      </div>
      {error && <p className="absolute text-12 text-red-600">{error}</p>}
    </form>
  )
}
