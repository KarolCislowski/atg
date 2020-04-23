import React, { useState } from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export const CustomForm = ({ submitHandler }) => {
  const typesOfGames = ['V75', 'V65', 'V64', 'V4']
  const [chosenGame, setChosenGame] = useState('')
  const [wrongInput, setWrongInput] = useState(false)

  const typeHandler = (e) => {
    const typedText = e.target.value.toUpperCase()
    const reg = RegExp(typedText)
    setChosenGame(typedText)
    setWrongInput(!typesOfGames.find((value) => reg.test(value)))
  }

  return (
    <Form inline="true" className="justify-content-center">
      <Form.Group>
        <Form.Control placeholder="Choose a Game" maxLength="3" isInvalid={wrongInput} type="text" value={chosenGame} onChange={(e) => typeHandler(e)}></Form.Control>
        <Button type="submit" disabled={!typesOfGames.includes(chosenGame)} onClick={(e) => submitHandler(e, chosenGame)}>Search</Button>
      </Form.Group>
    </Form>
  )
}