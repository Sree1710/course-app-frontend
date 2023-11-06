import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminAddClg from './Components/AdminAddClg';
import AdminViewClg from './Components/AdminViewClg';
import AdminViewStudent from './Components/AdminViewStudent';
import './App.css';
import AdminLogin from './Components/AdminLogin';
import StudReg from './Components/StudReg';


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
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
