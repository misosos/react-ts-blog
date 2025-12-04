import { createRoot } from 'react-dom/client';
import './styles/styles.css';
import App from './App.tsx';
import {BrowserRouter} from "react-router";

createRoot(document.getElementById("root")!).render(
    <BrowserRouter basename="/react-ts-blog">
        <App />
    </BrowserRouter>
);
