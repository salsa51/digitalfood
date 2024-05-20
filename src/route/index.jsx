import { Route, Routes } from "react-router-dom";
import NavLayout from "../components/Layouts";
import LandingPage from "../pages/LandingPage";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const AppRouter = () => {


  return (
    <NavLayout>
<Routes>
  <Route path='/' element={<LandingPage />} />
  <Route path="/SignIn" element={<SignIn />} />
  <Route path="/SignUp" element={<SignUp />} />
</Routes>

</NavLayout>
    

  );
};
export default AppRouter;




