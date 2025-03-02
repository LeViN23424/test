import { Routes, Route } from "react-router";
import {Greeting,Calculator} from './pages'
function App() {
  return (
   <Routes >
      <Route path='/' element={<Greeting/>}/>
      <Route path='/calculate' element={<Calculator/>}/>
   </Routes>
  )
}

export default App
