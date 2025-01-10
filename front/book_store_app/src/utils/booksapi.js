// src/utils/googleBooksApi.js

const GOOGLE_BOOKS_API_BASE_URL = "https://www.googleapis.com/books/v1/volumes";

/**
 * Fetch books from Google Books API
 * @param {string} query - The search query for books
 * @returns {Promise<object>} - The API response containing book data
 */
export const fetchBooks = async (query) => {
  try {
    const response = await fetch(`${GOOGLE_BOOKS_API_BASE_URL}?q=${query}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    return data; // Return the data for the calling component
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error; // Re-throw the error for error handling in calling components
  }
};
