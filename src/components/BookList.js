import { useContext } from "react";
import BooksContext from "./context/books";
import BookShow from "./BookShow";
function BookList() {
	const { books } = useContext(BooksContext);
	const bookStore = books.map((book) => (
		<BookShow
			key={book.id}
			bookInfo={book}
			// deleteBook={deleteBook}
			// editBook={editBook}
		/>
	));
	return <div className="book-list">{bookStore}</div>;
}

export default BookList;
