import { useState } from "react"
import Questionarie_1 from "./components/Questionarie_1"
import Questionarie_2 from "./components/Questionarie_2"
import Moodboard from "./components/Moodboard"
export default function App() {

  
  const [screen,setScreen] = useState(0);

  function onNext()
  {
      setScreen(screen+1);
  }

  function onBack()
  {
    setScreen(screen-1);
  }

  return (
    <>
  {screen === 0 && <Questionarie_1 onNext={onNext} />}
  {screen === 1 && <Questionarie_2  onBack={onBack} onNext={onNext} />}
  {screen === 2 && <Moodboard onBack={onBack} />}
    </>
  )
}

 
