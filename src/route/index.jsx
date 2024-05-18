import { Route, Routes } from "react-router-dom";
import NavLayout from "../components/Layouts";
import LandingPage from "../pages/LandingPage";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const AppRouter = () => {


  return (
    <NavLayout>
      <SignIn/>
      <SignUp/>
<Routes>
  <Route path='/' element={<LandingPage />} />
</Routes>

</NavLayout>
    

  );
};
export default AppRouter;




