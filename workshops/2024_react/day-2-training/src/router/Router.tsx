import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import Homepage from "../pages/Homepage";
import MainLayout from "../layout/MainLayout";
import Services from "../pages/Services";
import UserPage from "../pages/UserPage";
import TypeScriptPage from "../pages/TypeScriptPage";
import Protected from "../pages/Protected";
import Dashboard from "../components/Dashboard";
import PropDrillingPage from "../pages/PropDrillingPage";
import LoginPage from "../pages/LoginPage";

// You can do this:
export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />}>
            <Route index element={<Homepage />} />
            <Route path="services" element={<Services />} />
            <Route path="users">
                <Route index element={<UserPage />} />
            </Route>
            <Route path="typescript" element={<TypeScriptPage/>}/>
            <Route element={<Protected/>}>
                <Route path="dashboard" element={<Dashboard/>}>
                    <Route path="income" element={<h3>Income</h3>}/>
                </Route>
            </Route>
            <Route path="propdrilling" element={<PropDrillingPage/>}/>
            <Route path="login" element={<LoginPage/>}/>
        </Route>
    )
);