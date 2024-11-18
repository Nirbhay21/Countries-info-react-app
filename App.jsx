import Header from "./components/Header"
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import AppContainer from "./components/AppContainer";

export default function App() {
    return (
        <ThemeProvider>
            <AppContainer>
                <Header />
                <Outlet />
            </AppContainer>
        </ThemeProvider>
    );
}