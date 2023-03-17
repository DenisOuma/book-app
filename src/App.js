import { useEffect, useContext } from "react";
import "./index.css";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BooksContext from "./components/context/books";
function App() {
	const { getBooks } = useContext(BooksContext);

	useEffect(() => {
		getBooks();
	}, []);

	return (
		<div className="app">
			<h1>My Reading List</h1>
			<BookList />
			<BookCreate />
		</div>
	);
}

export default App;
