import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import RouteConfig from "./routes/RouteConfig";
import { BrowserRouter} from "react-router-dom";

export default function App() {
    return (
        <>
        <BrowserRouter>
        <Header />
        <RouteConfig />
        <Footer />   
        </BrowserRouter>
        </>

    )
}