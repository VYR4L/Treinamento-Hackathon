import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { TaskPage } from './pages/Tasks';
import {RegisterPage} from './pages/Register'
import './App.css'



/*
import {Button} from './components/Button'

const [text, setText] = useState("")
  const [isClicked, setIsclicked] = useState(false)
 
  function handleChangeText(e:any){
    var texto=e.target.value;
    setText(texto);  
  }

  function handleChangeButton(){
    setIsclicked(!isClicked);
  }

  console.log(isClicked)
  console.log(text)
  
  return (
    <div>
    <h1>{isClicked ? text : "Clica Eu!"}</h1>
    <Button text={text} click={handleChangeButton} />
    <input type="text" placeholder="Digitae!" onChange={handleChangeText} />
    </div>   
  )
*/

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TaskPage/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App