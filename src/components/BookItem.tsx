import type { Book } from "../type/Book"
import styles from "./BookItem.module.css"

type Props = {
    book: Book
    onDelete: (id: string) => void
    onUpdateStatus: (id: string, status: "Lido" | "Não lido") => void;
}

const BookItem = ({ book, onDelete, onUpdateStatus }: Props) => {


    const inverterStatus = () => {
        const novoStatus = book.status === "Lido" ? "Não lido" : "Lido";
        onUpdateStatus(book._id, novoStatus);
    }

    return (
        <ul>
            <li className={styles.bookItem}>
                <strong className={styles.title}>{book.titulo}</strong>
                <p className={styles.author}>{book.autor}</p>
                <p className={styles.status}>Status: {book.status}</p>

                <button
                    className={`${styles.button} ${styles.invertStatus}`}
                    onClick={inverterStatus}
                >
                    Inverter Status
                </button>

                {book._id && (
                    <button
                        className={`${styles.button} ${styles.delete}`}
                        onClick={() => onDelete(book._id)}
                    >
                        🗑️ Excluir
                    </button>
                )}
            </li>
        </ul>
    );
};

export default BookItem