import { Route, Routes } from "react-router-dom";
import NavLayout from "../components/Layouts";
import LandingPage from "../pages/LandingPage";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import MarketPlace from "../pages/MarketPlace";
import ChatbotSidecol from "../pages/ChatbotSidecol";
import Chatbot from "../pages/Chatbot";
import TentangKami from "../pages/TentangKami";
import Kontak from "../pages/Kontak";
import DetailProductBahan from "../pages/DetailProductBahan";
import Keranjang from "../pages/keranjang";

const AppRouter = () => {


  return (
    <Routes>
      <Route path='/' element={<NavLayout><LandingPage /></NavLayout>} />      
      <Route path='/SignIn' element={<SignIn />} />
      <Route path='/SignUp' element={<SignUp />} />
      <Route path='/ChatbotSidecol' element={<ChatbotSidecol />} />
      <Route path='/Chatbot' element={<Chatbot />} />
      <Route path='/MarketPlace' element={<MarketPlace />} />  
      <Route path='/Keranjang' element={<Keranjang />} />  
      <Route path='/DetailProductBahan' element={<DetailProductBahan />} />  
      <Route path='/TentangKami' element={<NavLayout><TentangKami /></NavLayout>} />  
      <Route path='/Kontak' element={<NavLayout><Kontak /></NavLayout>} /> 
      
    </Routes>
  );
};
export default AppRouter;  