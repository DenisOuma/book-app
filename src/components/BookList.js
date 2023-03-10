import BookShow from "./BookShow";
function BookList({ bookList }) {
	console.log("Here is the book", bookList);
	const bookStore = bookList.map((book) => (
		<BookShow key={book.id} bookInfo={book.title} />
	));
	return <div>{bookStore}</div>;
}

export default BookList;
