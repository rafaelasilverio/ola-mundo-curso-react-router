
import Home from './pages/Home';
import About from './pages/About';
import { BrowserRouter, Routes, Route } from 'react-router';
import Menu from './components/Menu';
import Footer from './components/Footer';
import DefaultPage from './components/DefaultPage';


const AppRoutes = () => {

  return (
    <>
      <BrowserRouter>
        <Menu/>

        <Routes>
          <Route path='/' element={<DefaultPage/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/sobremim" element={<About/>}/>
          </Route>

          <Route path="*" element={<div><p>Página não encontrada</p></div>}/>
        </Routes>

        <Footer/>
      </BrowserRouter>
    </>
  )
}
export default AppRoutes
