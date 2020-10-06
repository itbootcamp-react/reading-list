import React from "react";
import NavBar from "./components/NavBar.js";
import BookContextProvider from "./context/BookContext";
import BookList from "./components/BookList.js";
import BookForm from "./components/BookForm.js";

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <NavBar />
        <BookList />
        <BookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
