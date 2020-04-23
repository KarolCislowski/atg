import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'

import { CustomForm } from './components/CustomForm'
import { Display } from './components/Display'

export const App = () => {
  const [activeGame, setActiveGame] = useState('')

  const submitHandler = (e, chosenGame) => {
    e.preventDefault()
    setActiveGame(chosenGame)
  }

  return (
    <div>
      <Container className="content">
        <h1>Check future ATG races and last results!</h1>
        <h3>Choose between V4, V64, V65 and V75 and play with us!</h3>
        <CustomForm submitHandler={submitHandler} />
        {activeGame.length > 0 && <Display activeGame={activeGame} />}
      </Container>
    </div>
  )
}
