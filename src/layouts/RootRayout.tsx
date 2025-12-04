// src/layouts/RootLayout.tsx
import Header from "../components/Header.tsx";
import {Outlet} from "react-router-dom";
import Footer from "../components/Footer";

export default function RootLayout() {
    return (
        <div className="page">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}