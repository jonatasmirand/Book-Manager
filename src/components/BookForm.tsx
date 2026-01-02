import { useState } from "react";
import type { NewBook } from "../type/Book";
import styles from "./BookForm.module.css";

type Props = {
    aoEnviar: (book: NewBook) => void;
};

const BookForm = ({ aoEnviar }: Props) => {
    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [status, setStatus] = useState<"Lido" | "Não lido">("Não lido");

    const enviar = (e: React.FormEvent) => {
        e.preventDefault();
        if (!titulo || !autor) return;

        aoEnviar({ titulo, autor, status });

        setTitulo('');
        setAutor('');
        setStatus("Não lido");
    };

    return (
        <form className={styles.form} onSubmit={enviar}>
            <h1>Adicionar Livro</h1>

            <div className={styles.row}>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h2>Título:</h2>
                    <input
                        type="text"
                        placeholder="Nome do livro"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                    />
                </div>

                <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h2>Autor:</h2>
                    <input
                        type="text"
                        placeholder="Nome do autor"
                        value={autor}
                        onChange={(e) => setAutor(e.target.value)}
                    />
                </div>
            </div>

            <h2>Status:</h2>
            <select
                value={status}
                onChange={(e) => setStatus(e.target.value as "Lido" | "Não lido")}
            >
                <option value="Lido">Lido</option>
                <option value="Não lido">Não lido</option>
            </select>

            <button type="submit">Enviar</button>
        </form>
    );
};

export default BookForm;

