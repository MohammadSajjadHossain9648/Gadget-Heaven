import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import MainLayout from "../components/MainLayout/MainLayout";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('categories.json')
            },
        ],
    },
]);

export default Routes;