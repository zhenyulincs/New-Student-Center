import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./page/home";
import Login from "./page/login";
import Registration from "./page/registration";
import ErrorPage from './page/ErrorPage';
import SearchResults from './page/SearchResults';
import Front from './page/front';
import Studentrecords from './page/linkedpages/studentrecords';
import Healthrecords from './page/linkedpages/healthrecords';
import SubmittedHealthRecords from './page/linkedpages/submittedHealthRecords';
import Financialaid from './page/linkedpages/financialaid';
import Notifications from "./page/linkedpages/notifications"
import Enroll from "./page/linkedpages/enroll"
import CourseDescription from "./page/linkedpages/coursedescription";
import SchoolCalendar from "./page/linkedpages/schoolcalendar";

function App() {
  return (

    <div>
      <Routes>
      <Route index element={<Home/>} />
      <Route path="Login" element={<Login/>} />
      <Route path="Registration" element={<Registration/>} />
      <Route path="SearchResults" element={<SearchResults/>} />
      <Route path='ErrorPage' element={<ErrorPage/>} />
      <Route path='Front' element={<Front/>} />
      <Route path='Notifications' element={<Notifications/>}/>
      <Route path='Enroll' element={<Enroll/>}/>
      <Route path='Studentrecords' element={<Studentrecords/>}/>
      <Route path='Healthrecords' element={<Healthrecords/>}/>
      <Route path='SubmittedHealthRecords' element={<SubmittedHealthRecords/>}/>
      <Route path='Financialaid' element={<Financialaid/>}/>
      <Route path='CourseDescription' element={<CourseDescription/>}/>
      <Route path='SchoolCalendar' element={<SchoolCalendar/>}/>
      </Routes>
    </div>
  );
}

export default App;
