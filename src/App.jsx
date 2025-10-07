import { Routes, Route} from 'react-router-dom'
import NavBar from './components/organisms/Navbar'
import Home from './pages/Home'
import Footer from './components/organisms/Footer'

function App() {
  return (
       <>
          <NavBar />
          <Routes>
              <Route path='/' element={<Home />} />
          </Routes>
          <Footer />    
       </>
  );
}

export default App;
