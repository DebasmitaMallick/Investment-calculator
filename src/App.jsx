import { useState } from "react"
import { Header } from "./components/Header"
import { UserInput } from "./components/UserInput"
import { Table } from "./components/Table";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput(prevUserInput =>
      ({
        ...prevUserInput,
        [inputIdentifier]: newValue
      })
    )
  }

  return (
    <>
      <Header />
      <UserInput 
        userInput={userInput}
        onChange={handleChange}
      />
      <Table 
        userInput={userInput}
      />
    </>
  )
}

export default App
