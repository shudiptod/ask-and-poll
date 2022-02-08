import React from 'react';
import { AppThemeProvider } from 'react-material-ui-theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CreatePoll from './components/CreatePoll/CreatePoll';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import PublicPolls from './components/PublicPolls/PublicPolls';

import NavBar from './components/shared/NavBar/NavBar';
import SinglePoll from './components/SinglePoll/SinglePoll';
import AuthProvider from './context/AuthProvider';
import StateProvider from './context/StateProvider';
function App() {

  return (
    <div>
      <AppThemeProvider
        defaultColorPalette="Green yellow"
        defaultThemeMode="darkblue"
      >
        <AuthProvider>
          <StateProvider>
            <BrowserRouter>
              <NavBar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/public" element={<PublicPolls />} />
                <Route path="/create" element={<CreatePoll />} />
                <Route path="/poll/:id" element={<SinglePoll />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </BrowserRouter>
          </StateProvider>
        </AuthProvider>
      </AppThemeProvider>
    </div>
  );
}

export default App;
