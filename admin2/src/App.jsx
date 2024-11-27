import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import TaskKanban from './Pages/TaskKanban/TaskKanban';
import Users from './Pages/Users/Users';
const App = () => {
  return (
    <BrowserRouter>
      <div className="grid grid-cols-6 grid-rows-5 gap-3">
        <div className="row-span-5">
          <Navbar />
        </div>
        <div className="col-span-5 row-span-5 p-5">
          <Header />
          <Routes>
            <Route path="/" exact={true} element={<Home />} />
            <Route path="/taskkanban" exact={true} element={<TaskKanban />} />
            <Route path="/login" exact={true} element={<Login />} />
            <Route path="/users" exact={true} element={<Users />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
