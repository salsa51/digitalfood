import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import NavLayout from "../components/Layouts";

const AppRouter = () => {
  return (
    <NavLayout>
      <Routes>
        <Route path='/' element={<LandingPage />} />
      </Routes>
    </NavLayout>
  );
};

export default AppRouter;
