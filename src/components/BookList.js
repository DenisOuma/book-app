import useBooksContext from "./hooks/use-books-context";
import BookShow from "./BookShow";
function BookList() {
	const { books } = useBooksContext();
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
