import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import Catalog from './Pages/Catalog'
import About from "./Pages/About";
import Home from "./Pages/Home";
import Admin from "./Pages/Admin";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/Notfound";
import GlobalProvider from './State/globalProvider'
import Cart from "./Pages/Cart";


function App() {
    return (
        <GlobalProvider>
    <BrowserRouter>
    <NavBar />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/catalog' element={<Catalog/>} />
        <Route path='/admin' element={<Admin />}></Route> 
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='*' element={<NotFound />} />
        

    </Routes>
    <Footer />
</BrowserRouter>
</GlobalProvider>

    )
}

export default App
