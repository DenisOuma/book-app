import BookShow from "./BookShow";
function BookList({ bookList, deleteBook }) {
	const bookStore = bookList.map((book) => (
		<BookShow key={book.id} bookInfo={book} deleteBook={deleteBook} />
	));
	return <div className="book-list">{bookStore}</div>;
}

export default BookList;
