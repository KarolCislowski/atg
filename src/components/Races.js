import React, { useState, useEffect } from 'react'
import Moment from 'react-moment'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Accordion from 'react-bootstrap/Accordion'

import { Start } from './Start'

export const Races = ({ gameId, game }) => {
  const gameAPI = `https://www.atg.se/services/racinginfo/v1/api/games/${gameId}`
  const [races, setRaces] = useState()

  useEffect(() => {
    fetch(gameAPI)
      .then((res) => res.json())
      .then((data) => {
        setRaces(data.races)
      })
  }, [gameAPI])
  return (
    <>
      {races && races.map((race) => (
        <Jumbotron className={game}>
          <h3>{game}-{race.number}</h3>
          <h5><Moment format="YYYY MMM DD HH:mm">{race.startTime}</Moment> {race.name}</h5>
          <Accordion>
            {race.starts.map((start, index) => (
              <Start
                start={start}
                index={index} />
            ))}
          </Accordion>
        </Jumbotron>
      ))}
    </>
  )
}