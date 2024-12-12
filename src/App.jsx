
import Home from './pages/Home';
import About from './pages/About';

const pagina = window.location.pathname === '/' ? <Home/> : <About/>;

const App = () => {

  return (
    <>
      {pagina}
    </>
  )
}
export default App
