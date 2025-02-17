import ContactUS from './Components/Contact/Contact';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Components/Intro/Intro';
function App() { 
  return (
    <div>
    <BrowserRouter>
    <Navbar/>
   
    <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/ContactUS' element={<ContactUS/>}/>
      
    </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
