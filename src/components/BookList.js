import { useContext } from "react";
import BooksContext from "./context/books";
import BookShow from "./BookShow";
function BookList({ bookList, deleteBook, editBook }) {
	const value = useContext(BooksContext);

	const bookStore = bookList.map((book) => (
		<BookShow
			key={book.id}
			bookInfo={book}
			deleteBook={deleteBook}
			editBook={editBook}
		/>
	));
	return (
		<div className="book-list">
			{" "}
			{value}
			{bookStore}
		</div>
	);
}

export default BookList;
