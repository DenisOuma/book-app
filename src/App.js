import { useState } from "react";
import "./index.css";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
function App() {
	const [books, setBooks] = useState([]);

	const createBook = (title) => {
		console.log("Book added with ", title);
		const id = Math.random().toString().slice(2, 30);

		setBooks([...books, { id: id, title }]);
	};

	console.log(books);

	const deleteBookByid = (id) => {
		const deleteBookUpdate = books.filter((book) => book.id !== id);

		setBooks(deleteBookUpdate);
		console.log("The book Id is ===> ", id);
	};
	return (
		<div className="app">
			<BookList bookList={books} deleteBook={deleteBookByid} />
			<BookCreate onCreate={createBook} />
		</div>
	);
}

export default App;
