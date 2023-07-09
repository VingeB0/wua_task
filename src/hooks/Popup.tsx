import React, { useState, useEffect, useRef } from 'react'

const useInnerPopup = () => {
  const [open, setOpen] = useState(false)

  const popupRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const openPopup = () => {
    setOpen(true)
  }

  const closePopup = () => {
    setOpen(false)
  }

  return {
    open,
    openPopup,
    closePopup,
    popupRef,
  }
}

type PopupProps = {
  children: React.ReactNode
  content: React.ReactNode
}

const usePopup = () => {
  const { open, openPopup, closePopup, popupRef } = useInnerPopup()

  const Popup = ({ children, content }: PopupProps) => (
    <>
      {<div onClick={openPopup}>{children}</div>}
      {open && (
        <div className="min-w-max absolute t-0 l-0 bg-white z-10 rounded-5 shadow-popup -mt-1" ref={popupRef}>
          {content}
        </div>
      )}
    </>
  )

  return {
    isOpen: open,
    close: closePopup,
    open: openPopup,
    Popup,
  }
}

export default usePopup
