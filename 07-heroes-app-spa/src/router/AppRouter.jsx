
import { HeroesRoutes } from "../heroes";
import { LoginPage } from "../auth";
//import { Navbar } from "../ui"
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  return (
    <>
        {/* <Navbar /> */}

        <Routes>
            {/* <Route path="/marvel" element={ <MarvelPage /> } />
            <Route path="/dc" element={ <DcPage /> } />
            <Route path="/" element={ <Navigate to="/marvel" /> } /> */}
            
            <Route path="/login" element={
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              }
            />

            <Route path="/*" element={
                <PrivateRoute>
                  <HeroesRoutes />
                </PrivateRoute>
              }
            />

            {/* <Route path="/login" element={ <LoginPage /> } /> */}
            {/* <Route path="/*" element={ <HeroesRoutes /> } /> */}

            
        </Routes>
    </>
  )
} 
