import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminAddClg from './AdminAddClg';
import AdminViewClg from './AdminViewClg';
import AdminViewStudent from './AdminViewStudent';
import './App.css';
import AdminLogin from './AdminLogin';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/' exact element={<AdminLogin/>}/>
      <Route path='/admaddclg' exact element={<AdminAddClg/>}/>
      <Route path='/admviewclg' exact element={<AdminViewClg/>}/>
      <Route path='/admviewstud' exact element={<AdminViewStudent/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
