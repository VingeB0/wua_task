import React, { useState } from 'react'
import { TabItem, EventTab, PassingTab, ResumeTab } from '../tabs'

export enum TABS {
  RESUME = 'resume',
  EVENT = 'event',
  PASSING = 'passing',
}

const tabs = [
  { text: 'Резюме та відгуки', tab: TABS.RESUME },
  { text: 'Події', tab: TABS.EVENT },
  { text: 'Ще проходить · 2', tab: TABS.PASSING },
]

function App() {
  const [activeTab, setActiveTab] = useState(TABS.EVENT)

  const handleTabClick = (tabOption: TABS) => {
    setActiveTab(tabOption)
  }

  return (
    <div className="max-w-732 w-full mb-auto">
      <ul className="flex text-17 bg-transparent">
        {tabs.map(({ text, tab }, index) => {
          return (
            <TabItem onClick={() => handleTabClick(tab)} active={activeTab === tab} key={tab} tab={tab} text={text} />
          )
        })}
      </ul>
      <div className=" bg-white">
        {activeTab === TABS.PASSING && <PassingTab />}
        {activeTab === TABS.EVENT && <EventTab />}
        {activeTab === TABS.RESUME && <ResumeTab />}
      </div>
    </div>
  )
}

export default App
