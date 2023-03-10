import { useState } from "react";
import "./index.css";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
function App() {
	const [books, setBooks] = useState([]);

	const createBook = (title) => {
		console.log("Book added with ", title);
		const id = Math.random().toString().slice(2, 30);
		// eslint-disable-next-line no-restricted-globals

		setBooks([...books, { id: id, title: title }]);
	};

	console.log(books);
	return (
		<div>
			<BookCreate onCreate={createBook} />
			<BookList bookList={books} />
		</div>
	);
}

export default App;
