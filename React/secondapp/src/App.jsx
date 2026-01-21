import { useState } from "react";
import Profile from "./Profile";
import Example from "./Example";
import NameForm from "./NameForm";
import Loginform from "./Loginform";
import SubmitForm from "./submitForm";
import EffectLoop from "./EffectLoop";

function App() {

  const [showProfile, setShowProfile] = useState(false)

  function handleClick() {
    setShowProfile(true)
  }

  const products = ["Bags"];

  // 🔹 UI Rendering (JSX)
  return (
    <div>
      <NameForm/>
      <Loginform/>
      <SubmitForm/>
      <EffectLoop/>
    
    </div>
  );
}

export default App;   
