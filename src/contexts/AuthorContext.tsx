import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from '../services/storage/localStorageService';
import { Author } from '../models/interface/api/author.interface';
import { useBookContext } from './BookContext';
import { Book } from '../models/interface/api/book.interface';

const AUTHORS_KEY = 'AUTHORS_KEY';

interface AuthorContextProps {
  authors: Author[];
  addAuthor: (author: Author) => void;
  updateAuthor: (updatedAuthor: Author) => void;
  deleteAuthor: (id: string) => void;
  getBooksByAuthor: (authorId: string) => { totalBooks: number; books: Book[] };
  error?: string;
}

interface AuthorProviderProps {
  children: ReactNode;
}

const AuthorContext = createContext<AuthorContextProps | undefined>(undefined);

export const AuthorProvider: React.FC<AuthorProviderProps> = ({ children }) => {
  const [authors, setAuthors] = useState<Author[]>([]);
  const [error, setError] = useState<string>();
  const { books, deleteBook, setBooks } = useBookContext();

  useEffect(() => {
    const storedAuthors = getFromLocalStorage<Author>(AUTHORS_KEY) || [];
    setAuthors(storedAuthors);
  }, []);

  const existsEmail = (email: string | undefined, id?: string): boolean => {
    if (!email) return false;
    return authors.some(
      (existingAuthor) =>
        existingAuthor.email === email && existingAuthor.id !== id
    );
  };

  const handleEmailValidation = (
    email: string | undefined,
    id?: string
  ): boolean => {
    if (!email) {
      setError('');
      return true;
    }

    if (existsEmail(email, id)) {
      setError('E-mail já cadastrado!');
      return false;
    }
    setError('');
    return true;
  };

  const addAuthor = (author: Author) => {
    if (!handleEmailValidation(author.email)) return;

    const updatedAuthors = [...authors, author];
    setAuthors(updatedAuthors);
    saveToLocalStorage(AUTHORS_KEY, updatedAuthors);
  };

  const updateAuthor = (updatedAuthor: Author) => {
    if (!handleEmailValidation(updatedAuthor.email, updatedAuthor.id)) return;

    const updatedAuthors = authors.map((author) =>
      author.id === updatedAuthor.id ? updatedAuthor : author
    );
    setAuthors(updatedAuthors);
    saveToLocalStorage(AUTHORS_KEY, updatedAuthors);
  };

  const deleteAuthor = (id: string) => {
    const filteredAuthors = authors.filter((author) => author.id !== id);
    setAuthors(filteredAuthors);
    saveToLocalStorage(AUTHORS_KEY, filteredAuthors);

    books.forEach((book) => {
      if (book.author_id === id) {
        deleteBook(book.id);
      }
    });

    const filteredBooks = books.filter((book) => book.author_id !== id);
    setBooks(filteredBooks);
  };

  const getBooksByAuthor = (authorId: string) => {
    const authorBooks = books.filter((book) => book.author_id === authorId);
    return { totalBooks: authorBooks.length, books: authorBooks };
  };

  return (
    <AuthorContext.Provider
      value={{
        authors,
        addAuthor,
        updateAuthor,
        deleteAuthor,
        getBooksByAuthor,
        error,
      }}
    >
      {children}
    </AuthorContext.Provider>
  );
};

export const useAuthorContext = () => {
  const context = useContext(AuthorContext);
  if (!context) {
    throw new Error(
      'useAuthorContext deve ser usado dentro de um AuthorProvider'
    );
  }
  return context;
};
