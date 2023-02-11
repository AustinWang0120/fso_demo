const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}</p>
    </div>
  )
}

const App = () => {
  console.log("Hello from App component")
  const myWords = "Keep the console open all the time"
  return (
    <div>
      <Hello name="Austin" />
      <p>{myWords}</p>
    </div>
  )
}

export default App
