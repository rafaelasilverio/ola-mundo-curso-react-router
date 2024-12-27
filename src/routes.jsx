
import Home from './pages/Home';
import About from './pages/About';
import { BrowserRouter, Routes, Route } from 'react-router';
import Menu from './components/Menu';
import Footer from './components/Footer';
import DefaultPage from './components/DefaultPage';
import Post from './pages/Post';
import NotFound from './components/NotFound';
import ScrollToTop from './components/ScrollToTop';


const AppRoutes = () => {

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Menu/>

        <Routes>
          <Route path='/' element={<DefaultPage/>}>
            <Route index element={<Home/>}/>
            <Route path="sobremim" element={<About/>}/>
          </Route>

          <Route path="posts/:id/*" element={<Post/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>

        <Footer/>
      </BrowserRouter>
    </>
  )
}
export default AppRoutes
