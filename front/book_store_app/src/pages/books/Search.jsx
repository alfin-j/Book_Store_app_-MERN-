import React, { useState, useEffect } from "react";
import { fetchBooks } from "../../utils/booksapi";
import { useLocation } from "react-router-dom";
import {HiOutlineHeart } from 'react-icons/hi2'

const Search = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const location = useLocation();
  const { inputValue } = location.state || {}; // Retrieve the input value from state

  const loadBooks = async (query) => {
    try {
      const data = await fetchBooks(query);
      // const extractedBooks = data.items.map((item) => ({
      //   // id: item.id,
      //   // title: item.volumeInfo.title,
      //   // description: item.volumeInfo.description || "No description available",
      //   // image: item.volumeInfo.imageLinks?.thumbnail || "https://via.placeholder.com/128x192",
      // }));
      setBooks(data.items);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    loadBooks(inputValue);
  }, [inputValue]); // Fetch books whenever the query changes

  return (
 <div className="bg-gray-900 p-6 rounded-lg shadow-lg transition-shadow duration-300">
   <div className="flex flex-wrap justify-center gap-6">
    {books.map((book,index) => (
      <div
        key={book.id}
        className="max-w-xs w-full sm:w-1/3 md:w-1/4 lg:w-1/5 bg-gray-800 rounded-md p-4 shadow-md hover:shadow-xl transition-shadow duration-300"
      >
        <img
          src={book.volumeInfo.imageLinks?.thumbnail}
          alt={book.volumeInfo.title}
          className="w-full h-48 rounded-t-md mb-4 object-contain"
        />
        <div className="text-white">
          <h3 className="text-lg font-semibold hover:text-red-600 transition-colors mb-2">
            {book.volumeInfo.title.slice(0,26)}..
          </h3>
          <p className="text-red-500">{book.volumeInfo.authors?.join(', ').slice(0,30)}</p>
          <p className="text-sm text-gray-400 mb-4">
            {book.volumeInfo.description?.slice(0, 80)}...
          </p>
          <a href={book.volumeInfo.previewLink} className="text-blue-500 mt-2 inline-block">Read More</a>
          <button
            // Add onClick for functionality
            className="w-full bg-gradient-to-r from-red-500 to-red-700 text-white py-2 rounded-md flex items-center justify-center gap-2 font-medium hover:from-red-600 hover:to-red-800 transition-all"
          >
        <HiOutlineHeart className="size-6 text-white  hover:text-red-500" />
            <span>Recommend</span>
          </button>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default Search;
