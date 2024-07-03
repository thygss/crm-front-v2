import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CompromissoForm from './Components/CompromissoForm';

import Home from './Components/Home';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Compromisso" element={<CompromissoForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
