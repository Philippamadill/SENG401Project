import './App.css';
import LoginPage from '../pages/Login';
import RegisterPage from '../pages/Register';
import CurrentlyReading from '../pages/CurrentlyReading';
import WantToRead from '../pages/WantToRead';
import AlreadyRead from '../pages/AlreadyRead';
import TopPicks from '../pages/TopPicks';
import Protected from './Protected';
import {BrowserRouter, Route,Routes } from "react-router-dom";
import Layout from "../Layout"
import { AuthenticationContext } from '../context/UserContext';
import { useContext } from 'react';


function App() {

  const {authentication} = useContext(AuthenticationContext)
  return (
      <BrowserRouter>
        <Routes>
          <Route index element = {<LoginPage />} />
          <Route path = "/register" element = {<RegisterPage />} />
          <Route element = {<Layout />}>
                <Route path = "/currentlyreading" element = {<CurrentlyReading />} />
                <Route path = "/wanttoread" element = {<WantToRead />} />
                <Route path = "/alreadyread" element = {<AlreadyRead />} />
                <Route path = "/toppicks" element = {<TopPicks />} />
              </Route>
        </Routes>
      </BrowserRouter>

  );
}

export default App;
