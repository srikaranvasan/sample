import './assets/App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Signup from './components/signup';
import Login from './components/Login'
import Signupnext from './components/signupNext';
import Otp from './components/Otp';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/signupnext" element={<Signupnext/>}/>
          <Route path="/otp" element={<Otp/>}/>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
