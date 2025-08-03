import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loginnum from './components/Loginnum';  
import MainApp from './components/MainApp';  
import Chatinfo from './components/Chatinfo';
import Setting from './components/Setting'; 
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/loginnum" element={<Loginnum />} />
          <Route path="/app/*" element={<MainApp />} />
          <Route path="/loginnum/app/*" element={<MainApp />} />
          {/* <Route path='/chatinfo/:id' element={<Chatinfo/>}/> */}
          {/* <Route path='/chatinfo/:id' element={<Chatinfo/>}/> */}
          <Route path='/setting' element={<Setting/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
