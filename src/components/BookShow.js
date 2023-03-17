import { useState, useContext } from "react";
import BookEdit from "./BookEdit";
import BooksContext from "./context/books";
function BookShow({ bookInfo, deleteBook, editBook }) {
	const [showEdit, setShowEdit] = useState(false);
	const { deleteBookByid, editBookById } = useContext(BooksContext);
	const handleDelete = () => {
		deleteBookByid(bookInfo.id);
	};

	const handleEdit = () => {
		setShowEdit(!showEdit);
	};

	const handleForm = (id, title) => {
		setShowEdit(false);
		editBookById(id, title);
	};

	let content = <h3>{bookInfo.title}</h3>;
	if (showEdit) {
		content = <BookEdit propTitle={bookInfo} closeForm={handleForm} />;
	}
	return (
		<div className="book-show">
			<div className="">{content}</div>
			<img
				src={`https://picsum.photos/seed/${bookInfo.id}/300/200`}
				alt="books"
			/>
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
