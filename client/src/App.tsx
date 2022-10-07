import './App.css';
import { 
  Routes, 
  Route 
} from "react-router-dom";
import {
  HomePage,
  LandingPage, 
  LoginPage,
  SignupPage,
  TrendingPage,
  PageNotFound
} from "./pages";
import {
  TopBar
} from "./components";

function App() {
  return (
    <>
      <TopBar />
      <Routes>
        <Route path={ "/" } element={ <LandingPage /> } />
        <Route path={ "/login" } element={ <LoginPage /> } />
        <Route path={ "/signup" } element={<SignupPage /> } />
        <Route path={ "/home" } element={ <HomePage /> } />
        <Route path={ "/trending" } element={ <TrendingPage /> } />
        <Route path={ "*" } element={<PageNotFound /> } />
      </Routes>      
    </>
  )
}

export default App
