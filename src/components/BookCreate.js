import { useState, useContext } from "react";
import BooksContext from "./context/books";

function BookCreate() {
	const { createBook } = useContext(BooksContext);
	const [title, setTitle] = useState("");

	const onSubmit = (e) => {
		e.preventDefault();
		createBook(title);
		setTitle("");
	};

	const handleChange = (e) => {
		setTitle(e.target.value);
	};
	return (
		<div className="book-create">
			<h3>Add a Book</h3>
			<form onSubmit={onSubmit}>
				<label htmlFor="title">Title</label>
				<input
					type="text"
					value={title}
					onChange={handleChange}
					className="input"
				/>
				<button type="submit" className="button">
					Create
				</button>
			</form>
		</div>
	);
}

export default BookCreate;
