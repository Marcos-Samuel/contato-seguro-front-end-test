import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Author from './pages/Author';

export default function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/author" element={<Author />} />
    </Routes>
  );
}
