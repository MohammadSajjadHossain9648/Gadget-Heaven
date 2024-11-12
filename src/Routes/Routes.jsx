import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import MainLayout from "../components/MainLayout/MainLayout";
import Statistics from "../components/Statistics/Statistics";

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
            {
                path: "/Statistics",
                element: <Statistics></Statistics>,
            },
        ],
    },
]);

export default Routes;