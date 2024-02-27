import './App.css'
import Home from "./Pages/HomePage/Home.tsx";
import {Route, Routes} from "react-router-dom";
import Blog from "./Pages/BlogPage/Blog.tsx";
import Footer from "./Components/Footer/Footer.tsx";
import Header from "./Components/Header/Header.tsx";

function App() {


    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/blog" element={<Blog/>}/>
            </Routes>
            <Footer/>
        </>
    )
}

export default App
