import axios from "axios";
import { createContext, useState } from "react";
const BooksContext = createContext();

const Provider = ({ children }) => {
	const [books, setBooks] = useState([]);

	const getBooks = async () => {
		const res = await axios.get("http://localhost:5000/books");

		setBooks([...books, ...res.data]);
		console.log(res.data);
	};

	const createBook = async (title) => {
		const res = await axios.post("http://localhost:5000/books", {
			title,
		});
		setBooks([...books, res.data]);
	};

	console.log("Here are the Books", books);

	// Handle Delete an Element
	const deleteBookByid = async (id) => {
		await axios.delete(`http://localhost:5000/books/${id}`);
		const deleteBookUpdate = books.filter((book) => book.id !== id);
		setBooks(deleteBookUpdate);
	};

	// Handle update a book

	const editBookById = async (id, title) => {
		const res = await axios.put(`http://localhost:5000/books/${id}`, {
			title,
		});
		const editBook = books.map((book) => {
			if (book.id === id) {
				return { ...book, ...res.data };
			}
			return book;
		});
		setBooks(editBook);
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
