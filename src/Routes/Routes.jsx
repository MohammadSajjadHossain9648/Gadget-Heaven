import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import MainLayout from "../components/MainLayout/MainLayout";
import Statistics from "../components/Statistics/Statistics";
import Dashboard from "../components/Dashboard/Dashboard";
import ProductCards from "../components/ProductCards/ProductCards";
import ProductDetail from "../components/ProductDetail/ProductDetail";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('../../public/categories.json'),
                children: [
                    {
                        path: "/",
                        element: <ProductCards></ProductCards>,
                        loader: () => fetch('../../public/products.json')
                    },
                    {
                        path: "/category/:category",
                        element: <ProductCards></ProductCards>,
                        loader: () => fetch('../../public/products.json')
                    }
                ]
            },
            {
                path: "/Statistics",
                element: <Statistics></Statistics>,
            },
            {
                path: "/Dashboard",
                element: <Dashboard></Dashboard>
            },
            {
                path: "/productDetail/:id",
                element: <ProductDetail></ProductDetail>
            }
        ],
    },
]);

export default Routes;