import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/home"



const routes = createBrowserRouter([

    {
        path: "/",
        element : <Home/>
    },
    {
        path : "*",
        element : "not found"
    }
    

])







export default routes
