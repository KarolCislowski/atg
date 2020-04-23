import React, { useState, useEffect } from 'react'

import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

import { Races } from './Races'

export const Display = ({ activeGame }) => {
  const scheduleAPI = `https://www.atg.se/services/racinginfo/v1/api/products/${activeGame}`

  const [upcoming, setUpcoming] = useState({})
  const [results, setResults] = useState({})

  const [tabKey, setTabKey] = useState('')

  useEffect(() => {
    fetch(scheduleAPI)
      .then((res) => res.json())
      .then((data) => {
        setUpcoming(data.upcoming[0])
        setResults(data.results[0])
        setTabKey((data.upcoming.length > 0 ? 'upcoming' : 'results'))
      })
  }, [scheduleAPI])

  return (
    <Tabs
      className="tabs"
      id="controlled-tab-example"
      activeKey={tabKey}
      onSelect={(k) => setTabKey(k)}>
      <Tab eventKey="upcoming" title="Upcoming">
        <div>
          <h1>{activeGame}</h1>
          <Races
            gameId={upcoming.id}
            game={activeGame} />
        </div>
      </Tab>
      <Tab eventKey="results" title="Results">
        <div>
          <h1>{activeGame}</h1>
          <Races
            gameId={results.id}
            game={activeGame} />
        </div>
      </Tab>
    </Tabs>
  )
}
