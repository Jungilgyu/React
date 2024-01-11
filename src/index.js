import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CommentList from './chapter05/CommentList';
import NotificationList from './chapter06/NotificationList';
import Accomodate from './chapter07/Accomodate';
import ConfirmButton from './chapter08/ConfirmButton';
import LandingPage from './chapter09/LandingPage';
import AttendanceBook from './chapter10/AttendanceBook';
import SignUp from './chapter11/SignUp';
import Calculator from './chapter12/Calculator';
import ProfileCard from './chapter13/ProfileCard';

const root = document.getElementById('root');
const rootElement = (
  <React.StrictMode>
    <ProfileCard />
  </React.StrictMode>
);

const createRoot = ReactDOM.createRoot || ReactDOM.unstable_createRoot;

// React 18에서는 createRoot를 사용하도록 권장
const rootInstance = createRoot(root);
rootInstance.render(rootElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
