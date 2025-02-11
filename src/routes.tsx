import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Serviços from './pages/Serviços';
import Galeria from './pages/Profissionais';
import Contato from './pages/Contato';
import { Provider } from './components/ui/provider.tsx';

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Sobre" element={<Sobre />} />
                <Route path="/Serviços" element={<Serviços />} />
                <Route path="/Galeria" element={<Galeria />} />
                <Route path="/Contato" element={<Contato />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Rotas;
