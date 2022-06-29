import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Footer from './components/Footer';
import NavBar from './components/layout/NavBar';
import Home from './Pages/Home';
import About from './Pages/About';
import NotFound from './Pages/NotFound';
import {AlertProvider} from './context/Alert/AlertContext'
import Alert from './components/layout/Alert';
import User from './Pages/User';
import { GFinderProvider } from './context/GFinderContext';


function App() {
  return (
    <GFinderProvider>
      <AlertProvider>
        <Router>
      
      <div className='flex flex-col justify-between h-screen'>
        <NavBar/>
        <main className='cntainer mx-auto px-3 pb-12'>
          <Alert/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/user/:login' element={<User/>}/>
          <Route path='/*' element={<NotFound/>}/>
          </Routes>
          </main>
        <Footer/>
      </div>
      
      
    </Router>
    
    </AlertProvider>
    </GFinderProvider>
    
    
  );
}

export default App;
