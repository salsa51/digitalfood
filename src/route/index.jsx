import { Route, Routes } from "react-router-dom";
import NavLayout from "../components/Layouts";
import LandingPage from "../pages/LandingPage";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import MarketPlace from "../pages/MarketPlace";

const AppRouter = () => {


  return (
    <Routes>
      <Route path='/' element={<NavLayout><LandingPage /></NavLayout>} />      
      <Route path='SignIn' element={<SignIn />} />
      <Route path='SignUp' element={<SignUp />} />
      <Route path='MarketPlace' element={<NavLayout><MarketPlace /></NavLayout>} />  
    </Routes>

  );
};
export default AppRouter;