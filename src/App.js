import { Route, Routes } from "react-router-dom";
import Lwla from "./Compenents/page1";
import SignUp from "./Compenents/signup";
import SignIn from "./Compenents/signin";


export default function App() {
  return <>           
  <Routes>
      <Route path="/" element={<Lwla />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/profil" element={<App />} />
      <Route path="/inscription-questions" element={<App />} />
    </Routes>
  </>
  
}