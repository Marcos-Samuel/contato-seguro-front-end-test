import {  Route, Routes } from 'react-router-dom';
import Home from './pages/Home/App';

export default function MyRoutes() {
  return (
    <Routes>
      <Route>
        <Route path='/' element={<Home />} />
        {/* <Route path='/sign-up' element={<SignUp />} /> */}
      </Route>
    </Routes>
  );
}