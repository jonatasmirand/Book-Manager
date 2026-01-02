import BookItem from "./BookItem";
import type { Book } from "../type/Book";
import styles from "./BookList.module.css";

type Props = {
    books: Book[];
    onDelete: (id: string) => void
    onUpdateStatus: (id: string, status: "Lido" | "Não lido") => void;
}

const BookList = ({ books, onDelete, onUpdateStatus }: Props) => {

    if (books.length === 0)
        return (<p>Nenhum Livro adicionado </p>)

    return (
        <div className={styles.container}>
            {books.map(item => (
                <BookItem
                    key={item._id}
                    book={item}
                    onDelete={onDelete}
                    onUpdateStatus={onUpdateStatus}
                    />)
            )}
        </div>
    )
}


export default BookList