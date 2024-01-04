import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/home"
import CreatedCv from "../pages/createdcv"
import NotFound from "../pages/404"



const routes = createBrowserRouter([

    {
        path: "/",
        element : <Home/>
    },
    {
        path: "/create-cv",
        element : <CreatedCv/>
    },
    {
        path : "*",
        element : <NotFound/>
    }
    

])







export default routes
