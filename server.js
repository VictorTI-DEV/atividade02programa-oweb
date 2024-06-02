const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());

app.use('/livros', require('./rotas/livros'));

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});