import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { getFromLocalStorage, saveToLocalStorage } from "../services/storage/localStorageService";
import { Author } from "../models/interface/api/author.interface";

const AUTHORS_KEY = "AUTHORS";

interface AuthorContextProps {
  authors: Author[];
  addAuthor: (author: Author) => void;
  updateAuthor: (updatedAuthor: Author) => void;
  deleteAuthor: (id: string) => void;
}
interface AuthorProviderProps{
    children: ReactNode;
}

const AuthorContext = createContext<AuthorContextProps | undefined>(undefined);

export const AuthorProvider: React.FC<AuthorProviderProps> = ({ children }) => {
  const [authors, setAuthors] = useState<Author[]>([]);

  useEffect(() => {
    const storedAuthors = getFromLocalStorage<Author>(AUTHORS_KEY) || [];
    setAuthors(storedAuthors);
  }, []);
  

  const addAuthor = (author: Author) => {
    const updatedAuthors = [...authors, author];
    setAuthors(updatedAuthors);
    saveToLocalStorage(AUTHORS_KEY, updatedAuthors);
  };

  const updateAuthor = (updatedAuthor: Author) => {
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
  };

  return (
    <AuthorContext.Provider
      value={{ authors, addAuthor, updateAuthor, deleteAuthor }}
    >
      {children}
    </AuthorContext.Provider>
  );
};

export const useAuthorContext = () => {
  const context = useContext(AuthorContext);
  if (!context) {
    throw new Error("useAuthorContext deve ser usado dentro de um AuthorProvider");
  }
  return context;
};
