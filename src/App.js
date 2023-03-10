import axios from "axios";
import { useState } from "react";

import "./index.css";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
function App() {
	const [books, setBooks] = useState([]);

	// handle add a new Book
	const createBook = async (title) => {
		const res = await axios.post("http://localhost:5000/books", {
			title,
		});
		setBooks([...books, res.data]);
		console.log(res);
	};

	console.log(books);

	// Handle Delete an Element
	const deleteBookByid = (id) => {
		const deleteBookUpdate = books.filter((book) => book.id !== id);
		setBooks(deleteBookUpdate);
	};

	// Handle update a book

	const editBookById = (id, title) => {
		const editBook = books.map((book) => {
			if (book.id === id) {
				return { ...book, title };
			}
			return book;
		});
		setBooks(editBook);
	};
	return (
		<div className="app">
			<h1>My Reading List</h1>
			<BookList
				bookList={books}
				deleteBook={deleteBookByid}
				editBook={editBookById}
			/>
			<BookCreate onCreate={createBook} />
		</div>
	);
}

export default App;
