import { useState } from "react";
import Profile from "./Profile";
import Example from "./Example";

function App() {

  const [showProfile, setShowProfile] = useState(false)

  function handleClick() {
    setShowProfile(true)
  }

  const products = ["Bags"];

  // 🔹 UI Rendering (JSX)
  return (
    <div>

      <h1 class="text-3xl font-bold underline">
        Hello world!
      </h1>
      <h2>Product List</h2>

      {products.length > 0 ? (
        <ul>
          {products.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <h3>No Products Available</h3>
      )}


      <button onClick={handleClick}>Show Profile </button>
      
      {showProfile && <Profile/>}
      <Example/>


    </div>
  );
}

export default App;   
