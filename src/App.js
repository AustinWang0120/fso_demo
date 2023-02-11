import { useState } from "react"

const Display = ({ counter }) => {
  return (
    <div>{counter}</div>
  )
}

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const handlePlusClick = () => {
    setCounter(counter + 1)
  }

  const handleResetClick = () => {
    setCounter(0)
  }

  return (
    <div>
      <Display counter={counter} />
      <Button text="plus" onClick={handlePlusClick} />
      <Button text="reset" onClick={handleResetClick} />
    </div>
  )
}

export default App
