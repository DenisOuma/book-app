function BookShow({ bookInfo, deleteBook }) {
	const handleDelete = () => {
		deleteBook(bookInfo.id);
	};
	return (
		<div className="book-show">
			{bookInfo.title}
			<div className="action">
				<button className="delete" onClick={handleDelete}>
					Delete
				</button>
			</div>
		</div>
	);
}

export default BookShow;
