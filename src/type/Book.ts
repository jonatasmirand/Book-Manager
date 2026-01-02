export type Book = {
    _id: string;
    titulo: string;
    autor: string;
    status: "Lido" | "Não lido";
}

export type NewBook = Omit<Book, "_id">;