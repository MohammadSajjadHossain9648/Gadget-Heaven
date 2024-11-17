import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import MainLayout from "../components/MainLayout/MainLayout";
import Statistics from "../components/Statistics/Statistics";
import Dashboard from "../components/Dashboard/Dashboard";
import ProductCards from "../components/ProductCards/ProductCards";
import ProductDetail from "../components/ProductDetail/ProductDetail";
import DashboardCards from "../components/DashboardCards/DashboardCards";
import AboutUs from "../components/AboutUs/AboutUs";


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/categories.json'),
                children: [
                    {
                        path: "/",
                        element: <ProductCards></ProductCards>,
                        loader: () => fetch('/products.json')
                    },
                    {
                        path: "/category/:category",
                        element: <ProductCards></ProductCards>,
                        loader: () => fetch('/products.json')
                    }
                ]
            },
            {
                path: "/Statistics",
                element: <Statistics></Statistics>,
                loader: () => fetch('/products.json')
            },
            {
                path: "/Dashboard",
                element: <Dashboard></Dashboard>,
                children: [
                    {
                        path: "/Dashboard/Cart",
                        element: <DashboardCards></DashboardCards>
                    },
                    {
                        path: "/Dashboard/Wishlist",
                        element: <DashboardCards></DashboardCards>
                    },
                ]
            },
            {
                path: "/AboutUs",
                element: <AboutUs></AboutUs>
            },
            {
                path: "/productDetail/:id",
                element: <ProductDetail></ProductDetail>
            },

        ],
    },
]);

export default Routes;