import Modal from "react-modal";
const BookDetail = ({ book, onClose }) => {
  return (
    <Modal isOpen={true} onRequestClose={onClose} id="book-modal">
      <div className="modal-header">
        <button onClick={onClose}>Kapat</button>{" "}
      </div>{" "}
      <div className="book-detail">
        <img
          src={book.volumeInfo.imageLinks?.thumbnail}
          alt={book.volumeInfo.title}
        />
        <h2>{book.volumeInfo.title}</h2>
        <p>{book.volumeInfo.description}</p>
        <p>Sayfa Sayısı: {book.volumeInfo.pageCount}</p>
        <p>Yayın Tarihi: {book.volumeInfo.publishedDate}</p>
      </div>
    </Modal>
  );
};
export default BookDetail;
