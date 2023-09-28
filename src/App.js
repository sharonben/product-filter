import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RedmiTv from './Tv/RedmiTv';
function App() {
  return (
    <div className="app">
      <Router>
     <Routes>
       <Route exact path='/' element={<Home/>} />
       <Route exact path='/redmi/:id' element={<RedmiTv/>}/>


     </Routes>
      </Router>


    </div>
  );
}

export default App;
