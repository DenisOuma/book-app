import { useState } from "react";
import BookEdit from "./BookEdit";
function BookShow({ bookInfo, deleteBook, editBook }) {
	const [showEdit, setShowEdit] = useState(false);
	const handleDelete = () => {
		deleteBook(bookInfo.id);
	};

	const handleEdit = () => {
		setShowEdit(!showEdit);
	};

	let content = <h3>{bookInfo.title}</h3>;
	if (showEdit) {
		content = <BookEdit propTitle={bookInfo} editBook={editBook} />;
	}
	return (
		<div className="book-show">
			<div className="">{content}</div>
			<div className="actions">
				<button className="edit" onClick={handleEdit}>
					Edit
				</button>
				<button className="delete" onClick={handleDelete}>
					Delete
				</button>
			</div>
		</div>
	);
}

export default BookShow;
