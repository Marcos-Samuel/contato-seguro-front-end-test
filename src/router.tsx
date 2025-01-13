import { Route, Routes } from 'react-router-dom';
import BookPage from './pages/BookPage';
import AuthorPage from './pages/AuthorPage';
import React from 'react';

export default function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<BookPage />} />
      <Route path="/authors" element={<AuthorPage />} />
    </Routes>
  );
}
