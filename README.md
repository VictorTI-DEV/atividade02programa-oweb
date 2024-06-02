
# API de Livros

Esta é uma API para gerenciar uma biblioteca de livros. A API permite recuperar todos os livros, cadastrar um novo livro e comprar um livro.

## Instalação

```bash
npm i

&

npm start
```

## Endpoints

### GET /livros

Este endpoint retorna todos os livros disponíveis na biblioteca. Não requer parâmetros.

### POST /livros

Este endpoint permite cadastrar um novo livro na biblioteca. Requer um corpo de solicitação JSON com os seguintes campos:

- `titulo`: O título do livro (string)
- `autor`: O autor do livro (string)
- `genero`: O genero do livro (string)
- `imagem`: A imagem de capa do livro (string)
- `quantidade`: A quantidade de exemplares do livro disponíveis (integer)

### POST /livros/comprar

Este endpoint permite comprar um livro e subtrai a quantidade de exemplares disponíveis. Requer um corpo de solicitação JSON com os seguintes campos:

- `titulo`: O titulo do livro que você deseja comprar 

Se a quantidade solicitada for maior do que a quantidade disponível, a solicitação retornará um erro.