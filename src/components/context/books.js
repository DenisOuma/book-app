import axios from "axios";
import { createContext, useState, useCallback } from "react";
const BooksContext = createContext();

const Provider = ({ children }) => {
	const [books, setBooks] = useState([]);

	const getBooks = useCallback(async () => {
		try {
			const { data } = await axios.get("http://localhost:5000/books");
			setBooks((prev) => [...data, ...books]);
		} catch (error) {
			console.log(error);
		}
	}, []);

	const createBook = async (title) => {
		try {
			const { data } = await axios.post("http://localhost:5000/books", {
				title,
			});
			setBooks((prev) => [data, ...books]);
		} catch (error) {
			console.log(error);
		}
	};
	// Handle Delete an Element
	const deleteBookByid = async (id) => {
		try {
			await axios.delete(`http://localhost:5000/books/${id}`);
			const deleteBookUpdate = books.filter((book) => book.id !== id);
			setBooks(deleteBookUpdate);
		} catch (error) {
			console.log(error);
		}
	};

	// Handle update a book

	const editBookById = async (id, title) => {
		try {
			const { data } = await axios.put(`http://localhost:5000/books/${id}`, {
				title,
			});
			const editBook = books.map((book) => {
				if (book.id === id) {
					return { ...book, ...data };
				}
				return book;
			});
			setBooks((prev) => editBook);
		} catch (error) {
			console.log(error);
		}
	};

	const valuToShare = {
		books,
		getBooks,
		createBook,
		deleteBookByid,
		editBookById,
	};
	return (
		<BooksContext.Provider value={valuToShare}>
			{children}
		</BooksContext.Provider>
	);
};
export { Provider };
export default BooksContext;
