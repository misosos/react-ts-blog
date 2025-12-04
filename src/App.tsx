// App.tsx
import {Route,Routes} from "react-router-dom";
import RootLayout from "./layouts/RootRayout.tsx";
import Home from "./pages/Home.tsx";
import Auth from "./pages/Auth.tsx";
import Write from "./pages/Write.tsx";
import Read from "./pages/Read.tsx";

export default function App() {
    return (
        <>
            <Routes>
                <Route element={<RootLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/write" element={<Write />} />
                    <Route path="/read/:id" element={<Read />} />
                </Route>
            </Routes>
        </>
    );
}