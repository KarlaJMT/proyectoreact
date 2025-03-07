import { Route, Routes } from 'react-router-dom';
import { About } from './about/About';
import { Contact } from './contact/Contact';
import { Home } from './home/Home';
import HomePage from './home/HomePage';


export default function AppRoutes () {
    return (
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recetas" element={<HomePage/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
    )
}