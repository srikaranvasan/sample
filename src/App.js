import './assets/App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Signup from './components/signup';
import Login from './components/Login'
import Signupnext from './components/signupNext';
import Otp from './components/Otp';

function App() {
  return (
    <div>
      
         <Signup/>
    </div>
  );
}
export default App;
