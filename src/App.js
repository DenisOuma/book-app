import { useState } from "react";
import "./index.css";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
function App() {
	const [books, setBooks] = useState([]);

	// handle add a new Book
	const createBook = (title) => {
		console.log("Book added with ", title);
		const id = Math.random().toString().slice(2, 30);

		setBooks([...books, { id: id, title }]);
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
