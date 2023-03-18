import { useEffect } from "react";
import "./index.css";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import useBooksContext from "./components/hooks/use-books-context";

function App() {
	const { getBooks } = useBooksContext();

	useEffect(() => {
		getBooks();
	}, [getBooks]);

	return (
		<div className="app">
			<h1>My Reading List</h1>
			<BookList />
			<BookCreate />
		</div>
	);
}

export default App;
