
import Home from './pages/Home';
import About from './pages/About';
import { BrowserRouter, Routes, Route } from 'react-router';


const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/sobremim" element={<About/>}/>
          <Route path="*" element={<div><p>Página não encontrada</p></div>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
