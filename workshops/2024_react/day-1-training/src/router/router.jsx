import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import Homepage from '../pages/Homepage'
import AboutUs from '../pages/AboutUs'
import { NotFound } from "../pages/NotFound";
import { MemberPage } from "../pages/MemberPage";
import MainLayout from "../layouts/MainLayout";

// You can do this:
export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout/>}>
            <Route index element={<Homepage />} />
            <Route path="about-us">
                <Route index element={<AboutUs />} />
                <Route path=":id" element={<MemberPage/>} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Route>
    )
);