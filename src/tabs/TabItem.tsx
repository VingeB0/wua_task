import React, { useState } from 'react'
import usePopup from '../hooks/Popup'
import EventFilter, { ACTION_FILTERS, actionFilterToText } from './EventFilter'
import { TABS } from '../app/App'
import { ChervonDown } from '../assets/icons'

export type TabItemProps = {
  text: string
  onClick: () => void
  active: boolean
  tab: TABS
}

const decorLine: string =
  'relative after:content after:w-full after:h-0.5 after:bg-white after:absolute after:-bottom-0.5 after:right-0 after:left-0'
const animation: string = 'transition-opacity duration-300 ease-linear hover:opacity-60'

export const TabItem = ({ text, onClick, active, tab, ...props }: TabItemProps) => {
  const { Popup, close, isOpen } = usePopup()
  const [selectedOption, setSelectedOption] = useState<ACTION_FILTERS>(ACTION_FILTERS.ALL)

  const handleOptionClick = (value: ACTION_FILTERS) => {
    setSelectedOption(value)
    close()
  }

  return (
    <li {...props}>
      <button
        className={`flex items-center h-full py-2 px-7 border-x border-t border-solid border-gray ${
          active ? `bg-white cursor-auto ${decorLine}` : `bg-gray ${animation}`
        }`}
        onClick={onClick}
        type="button"
      >
        {text}
        {TABS.EVENT === tab && (
          <div className={`ml-2 relative ${!active && 'pointer-events-none'}`}>
            <Popup content={<EventFilter setOption={handleOptionClick} option={selectedOption} />}>
              <span className={`flex items-center cursor-pointer hover:underline text-primaryBlue`}>
                {actionFilterToText[selectedOption]}
                {isOpen ? <ChervonDown className="transform scale-[-1]" /> : <ChervonDown />}
              </span>
            </Popup>
          </div>
        )}
      </button>
    </li>
  )
}
