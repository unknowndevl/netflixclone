import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Player from './pages/Player';
import { ToastContainer, toast } from 'react-toastify';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import Under from './components/under';
const App = () => {


  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("Logged in");
        navigate('/');
      }
      else {
        console.log("Logged out");
        navigate('/Login');
      }

    })
  }, [])

  return (
    <div>
      <ToastContainer theme='dark' />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Player/:id' element={<Player />} />
        <Route path='/Under' element={<Under />} />

      </Routes>

    </div>
  )
}

export default App;