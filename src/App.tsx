
import { useEffect, useState } from "react"
import BookForm from "./components/BookForm"
import type { Book, NewBook } from './type/Book';
import BookList from "./components/BookList";
import axios from "axios";


const API_URL = 'https://crudcrud.com/api/075420a5e3c54efe8485923204341274/book'


function App() {

  const [bookList, setBookList] = useState<Book[]>([]);

  const adicionarBook = (dados: NewBook) => {
    axios
      .post<Book>(API_URL, dados)
      .then(resposta => setBookList(prev => [...prev, resposta.data]))
  }

  const removerBook = (id: string) => {
    axios
      .delete<Book>(`${API_URL}/${id}`)
      .then(() => {
        setBookList(prev => prev.filter(book => book._id !== id));
      });
  };


  const atualizarStatus = (id: string, status: "Lido" | "Não lido") => {
    const book = bookList.find(b => b._id === id);
    if (!book) return;

    
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { _id: _, ...rest } = book;
    const atualizado = { ...rest, status };

    axios
      .put(`${API_URL}/${id}`, atualizado)
      .then(() => {
        setBookList(prev =>
          prev.map(b => (b._id === id ? { ...book, status } : b))
        );
      })
      .catch(err => console.error("Erro ao atualizar:", err));
  };

  useEffect(() => {
    axios
      .get<Book[]>(API_URL)
      .then(resposta => setBookList(resposta.data));
  }, []);

  return (
    <>
      <BookForm aoEnviar={adicionarBook} />
      <BookList
        books={bookList}
        onDelete={removerBook}
        onUpdateStatus={atualizarStatus}
      />
    </>
  )
}

export default App
