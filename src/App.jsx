import { useState } from "react"
import { Header } from "./components/Header"
import { UserInput } from "./components/UserInput"

function App() {
  const [initialInvestment, setInitialInvestment] = useState();
  const [annualInvestment, setAnnualInvestment] = useState();
  const [expectedReturn, setExpectedReturn] = useState();
  const [duration, setDuration] = useState();

  return (
    <div className="App">
      <Header />
      <UserInput 
        initialInvestment={initialInvestment}  
        setInitialInvestment={setInitialInvestment}
        annualInvestment={annualInvestment}
        setAnnualInvestment={setAnnualInvestment}
        expectedReturn={expectedReturn}
        setExpectedReturn={setExpectedReturn}
        duration={duration}
        setDuration={setDuration}
      />
    </div>
  )
}

export default App
