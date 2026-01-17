import { Route, Routes } from "react-router-dom";
import './App.css'
import SignUp from "./Compenents/signup";
import SignIn from "./Compenents/signin";
import TermsJourney from "./Compenents/terms";
import Home from "./pages/home";

export default function App() {
  
  return <>           
  <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/terms" element={<TermsJourney />} />
      <Route path="/profil" element={<App />} />
      <Route path="/inscription-questions" element={<App />} />
    </Routes>
  </>
  
}