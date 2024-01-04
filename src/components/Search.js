import { IconButton, TextField } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import BookDetail from "./BookDetail";

function Search() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  console.log(selectedBook);

  const handleDetailClick = (book) => {
    setSelectedBook(book);
  };
  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      console.log(query);
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}`
      );
      setBooks(response.data.items);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div className="search-container">
      <form className="search-form" onSubmit={handleSearch}>
        <TextField
          id="outlined-search"
          label="Search field"
          type="search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <IconButton aria-label="search" size="large" value={query}>
          <SearchIcon type="submit" />
        </IconButton>
      </form>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <img
              src={book.volumeInfo.imageLinks?.thumbnail}
              alt={book.volumeInfo.title}
            />
            <p>{book.volumeInfo.title}</p>
            <button onClick={() => handleDetailClick(book)}>Detay</button>
          </li>
        ))}
      </ul>
      {selectedBook && (
        <BookDetail book={selectedBook} onClose={() => setSelectedBook(null)} />
      )}
    </div>
  );
}

export default Search;
