import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { getFromLocalStorage, saveToLocalStorage } from "../services/storage/localStorageService";
import { Book } from "../models/interface/api/book.interface";

const BOOKS_KEY = "books";

interface BookContextProps {
  books: Book[];
  addBook: (book: Book) => void;
  updateBook: (updatedBook: Book) => void;
  deleteBook: (id: string) => void;
}

interface BookProviderProps{
    children: ReactNode;
}

const BookContext = createContext<BookContextProps | undefined>(undefined);

export const BookProvider: React.FC<BookProviderProps> = ({ children}) => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const storedBooks = getFromLocalStorage<Book>(BOOKS_KEY) || [];
    setBooks(storedBooks);
  }, []);

  const addBook = (book: Book) => {
    const updatedBooks = [...books, book];
    setBooks(updatedBooks);
    saveToLocalStorage(BOOKS_KEY, updatedBooks);
  };

  const updateBook = (updatedBook: Book) => {
    const updatedBooks = books.map((book) =>
      book.id === updatedBook.id ? updatedBook : book
    );
    setBooks(updatedBooks);
    saveToLocalStorage(BOOKS_KEY, updatedBooks);
  };

  const deleteBook = (id: string) => {
    const filteredBooks = books.filter((book) => book.id !== id);
    setBooks(filteredBooks);
    saveToLocalStorage(BOOKS_KEY, filteredBooks);
  };

  return (
    <BookContext.Provider
      value={{ books, addBook, updateBook, deleteBook }}
    >
      {children}
    </BookContext.Provider>
  );
};

export const useBookContext = () => {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error("useBookContext must be used within a BookProvider");
  }
  return context;
};
