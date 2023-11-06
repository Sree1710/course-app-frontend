import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminAddClg from './Components/AdminAddClg';
import AdminViewClg from './Components/AdminViewClg';
import AdminViewStudent from './Components/AdminViewStudent';
import './App.css';
import AdminLogin from './Components/AdminLogin';
import StudReg from './Components/StudReg';
import StudLogin from './Components/StudLogin';
import StudProfile from './Components/StudProfile';
import ClgLogin from './Components/ClgLogin';
import ClgViewStud from './Components/ClgViewStud';
import ClgSearchStud from './Components/ClgSearchStud';


function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/' exact element={<AdminLogin/>}/>
      <Route path='/admaddclg' exact element={<AdminAddClg/>}/>
      <Route path='/admviewclg' exact element={<AdminViewClg/>}/>
      <Route path='/admviewstud' exact element={<AdminViewStudent/>}/>
      <Route path='/studreg' exact element={<StudReg/>}/>
      <Route path='/studlogin' exact element={<StudLogin/>}/>
      <Route path='/studprofile' exact element={<StudProfile/>}/>
      <Route path='/clglogin' exact element={<ClgLogin/>}/>
      <Route path='/clgviewstud' exact element={<ClgViewStud/>}/>
      <Route path='/clgsearchstud' exact element={<ClgSearchStud/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
