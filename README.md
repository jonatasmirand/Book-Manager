# 📚 Book Manager

Aplicativo React + TypeScript para gerenciar livros: adicionar, atualizar status (Lido / Não lido) e remover livros. Backend temporário via CrudCrud API.

## 🔹 Funcionalidades

Adicionar livros com título, autor e status

Cards modernos para cada livro

Alterar status do livro (“Lido” / “Não lido”)

Remover livros da lista

Persistência via CrudCrud

Layout responsivo e inputs lado a lado

## 💻 Tecnologias

React 18 + TypeScript

Axios para requisições HTTP

CSS Modules para estilização modular

Vite como bundler rápido

## 🗂 Estrutura do projeto
src/
 ├─ components/
 │   ├─ BookForm.tsx
 │   ├─ BookItem.tsx
 │   ├─ BookList.tsx
 │   ├─ BookForm.module.css
 │   ├─ BookItem.module.css
 │   └─ BookList.module.css
 ├─ type/
 │   └─ Book.ts
 ├─ App.tsx
 └─ main.tsx / index.tsx

## ⚙️ Instalação e execução
### Clone o repositório
git clone https://github.com/seu-usuario/book-manager.git

### Entre na pasta
cd book-manager

### Instale dependências
npm install

### Rode o projeto
npm run dev


Acesse: http://localhost:5173

## 🔗 Configuração da API

Crie sua API no CrudCrud

Substitua API_URL em App.tsx:

const API_URL = 'https://crudcrud.com/api/SEU_TOKEN_UNICO/book';

## 🎨 Layout e Estilo

Formulário: inputs lado a lado, compacto, botão estilizado

Cards: sombra suave, hover, botões lado a lado

Listagem: cards alinhados lateralmente, responsivo

## 📌 Uso

Preencha Título, Autor e Status

Clique Enviar → adiciona o livro

Clique Inverter Status → muda status do livro

Clique Excluir → remove o livro

## 🚀 Melhorias Futuras

Filtro por status

Ordenação por título ou autor

Notificações de sucesso/erro

Armazenamento offline

  
# 👤 Autor

Jonatas Miranda – Front-end Developer

https://github.com/jonatasmirand | www.linkedin.com/in/jonatasmirand

