import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Courses from '../../Pages/Courses/Courses/Courses';
import Faq from '../../Pages/Faq/Faq';
import Blog from '../../Pages/Blog/Blog';
import Checkout from '../../Pages/Checkout/Checkout';
import CourseDetails from "../../Pages/Courses/CourseDetails/CourseDetails";
import Login from "../../Pages/User/Login/Login";
import Register from "../../Pages/User/Register/Register";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('https://dream-war-server.vercel.app/courses')           },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/courses/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({params})=> fetch(`https://dream-war-server.vercel.app/courses/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <Checkout></Checkout>,
                loader: ({params})=> fetch(`https://dream-war-server.vercel.app/courses/${params.id}`)
            }, 
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])