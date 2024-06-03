import { Route, Routes } from "react-router-dom";
import NavLayout from "../components/Layouts";
import LandingPage from "../pages/LandingPage";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import MarketPlace from "../pages/MarketPlace";
import ChatbotSidecol from "../pages/ChatbotSidecol";

const AppRouter = () => {


  return (
    <Routes>
      <Route path='/' element={<NavLayout><LandingPage /></NavLayout>} />      
      <Route path='SignIn' element={<SignIn />} />
      <Route path='SignUp' element={<SignUp />} />
      <Route path='ChatbotSidecol' element={<ChatbotSidecol />} />
      <Route path='MarketPlace' element={<MarketPlace />} />  
    </Routes>
  );
};
export default AppRouter;  