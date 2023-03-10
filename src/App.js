import axios from "axios";
import { useState, useEffect } from "react";

import "./index.css";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
function App() {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		getBooks();
	}, []);

	const getBooks = async () => {
		const res = await axios.get("http://localhost:5000/books");

		setBooks([...books, ...res.data]);
		console.log(res.data);
	};
	// handle add a new Book
	const createBook = async (title) => {
		const res = await axios.post("http://localhost:5000/books", {
			title,
		});
		setBooks([...books, res.data]);
	};

	console.log("Here are the Books", books);

	// Handle Delete an Element
	const deleteBookByid = (id) => {
		const deleteBookUpdate = books.filter((book) => book.id !== id);
		setBooks(deleteBookUpdate);
	};

	// Handle update a book

	const editBookById = async (id, title) => {
		const res = await axios.put(`http://localhost:5000/books/${id}`, {
			title,
		});

		setBooks([...books, res.data]);
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
