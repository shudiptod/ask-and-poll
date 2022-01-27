import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CreatePoll from './components/CreatePoll/CreatePoll';
import Home from './components/Home/Home';
import PublicPolls from './components/PublicPolls/PublicPolls';

import NavBar from './components/shared/NavBar/NavBar';
import SinglePoll from './components/SinglePoll/SinglePoll';
import StateProvider from './context/StateProvider';
function App() {
  return (
    <div>
      <StateProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/public" element={<PublicPolls />} />
            <Route path="/create" element={<CreatePoll />} />
            <Route path="/poll/:id" element={<SinglePoll />} />
          </Routes>
        </BrowserRouter>
      </StateProvider>
    </div>
  );
}

export default App;
