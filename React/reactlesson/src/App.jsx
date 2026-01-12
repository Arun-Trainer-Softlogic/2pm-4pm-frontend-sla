
import './app.css'
import Button from './Component/Button'
import Card from './Component/Card'
import ClickExample from './Component/ClickExample'
import Counter from './Component/Counter'
import Header from './Component/Header'
import InputExample from './Component/InputExample'
import ShowPassword from './Component/ShowPassword'
import UserCard from './Component/UserCard'
import Welcome from './Component/Welcome'

function App() {


  const handleClick = () => {
    alert("Button clicked ")
  }


  return (
    <>
      <h1 className="card">Hello ar </h1>
      <button onClick={handleClick}>click eme </button>
      <Welcome />
      <Header />
      <Button brs={handleClick}>Click Me </Button>
      <UserCard name="Arun" age={25} isOnline={true} skills={["React", "JS", "Angular"]} />
      <Card>
        <h2>Welcome to Ar's Class</h2>
        <p>this is the children i  will pass </p>
        </Card>

<Counter/>
<ClickExample/>
<InputExample/>
<ShowPassword/>

    </>
  )
}

export default App
