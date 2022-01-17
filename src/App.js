import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CreatePoll from './components/CreatePoll/CreatePoll';
import Home from './components/Home/Home';
import PublicPolls from './components/PublicPolls/PublicPolls';

import NavBar from './components/shared/NavBar/NavBar';
function App() {
  return (
    <div>

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/public" element={<PublicPolls />} />
          <Route path="/create" element={<CreatePoll />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
