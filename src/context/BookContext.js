import React, { createContext, useReducer, useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";
import { bookReducer } from "../reducers/bookReducer.js";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem("books");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);
  // const [books, setBooks] = useState([
  //   { title: "zasto spavamo", author: "Matthew Walker", id: 1 },
  //   { title: "loserthink", author: "Scott Adams", id: 2 },
  // ]);

  // const addBook = (title, author) => {
  //   setBooks([...books, { title, author, id: uuidv4() }]);
  // };

  // const removeBook = (id) => {
  //   setBooks(books.filter((book) => book.id !== id));
  // };

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
