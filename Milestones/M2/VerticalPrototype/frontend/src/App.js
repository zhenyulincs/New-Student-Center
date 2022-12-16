import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./page/home";
import Login from "./page/login";
import Registration from "./page/registration";
import ErrorPage from './page/ErrorPage';
import SearchResults from './page/SearchResults';
import Front from './page/front';
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
      </Routes>
    </div>

  );
}

export default App;