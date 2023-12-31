import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/home"
import CreatedCv from "../pages/createdcv"



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
        element : "not found"
    }
    

])







export default routes
