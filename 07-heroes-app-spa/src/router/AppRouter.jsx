
import { HeroesRoutes } from "../heroes";
import { LoginPage } from "../auth";
//import { Navbar } from "../ui"
import { Route, Routes } from "react-router-dom";

export const AppRouter = () => {
  return (
    <>
        {/* <Navbar /> */}

        <Routes>
            {/* <Route path="/marvel" element={ <MarvelPage /> } />
            <Route path="/dc" element={ <DcPage /> } />
            <Route path="/" element={ <Navigate to="/marvel" /> } /> */}
            
            <Route path="/login" element={ <LoginPage /> } />
            <Route path="/*" element={ <HeroesRoutes /> } />

            
        </Routes>
    </>
  )
} 
