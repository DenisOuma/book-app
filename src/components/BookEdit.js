import { useState } from "react";

function BookEdit({ propTitle, closeForm }) {
	const [title, setTitle] = useState(propTitle.title);

	const handleEditBook = (e) => {
		e.preventDefault();
		closeForm(propTitle.id, title);
		console.log("Here is our updating title to the app ==>", title);
	};
	return (
		<form className="book-edit" onSubmit={handleEditBook}>
			<label htmlFor="title">Title</label>
			<input
				type="text"
				className="input"
				value={title}
				placeholder={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<button className="button is-primary">Save</button>
		</form>
	);
}

export default BookEdit;
