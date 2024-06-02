const express = require('express');
const { lerJSON, escreverJSON } = require('../helper/jsonHelper');

const router = express.Router();

// Rota GET para listar todos os livros
router.get('/', (req, res) => {
    lerJSON().then((data) => {
        res.json(data.livros);
    })
})

router.post('/', async (req, res) => {
    const data = await lerJSON();

    const { titulo, autor, genero, imagem, quantidade } = req.body;

    const novoLivro = {
        titulo,
        autor,
        genero,
        imagem,
        quantidade
    }

    if(novoLivro.titulo && novoLivro.autor && novoLivro.genero && novoLivro.imagem && novoLivro.quantidade) {
        if(typeof novoLivro.titulo !== 'string' || typeof novoLivro.autor !== 'string' || typeof novoLivro.genero !== 'string' || typeof novoLivro.imagem !== 'string' || typeof novoLivro.quantidade !== 'number') {
            res.status(400).send('Tipo de dado inválido!');
            return;
        }

        data.livros.push(novoLivro);
        res.json(data.livros);
        return;
    }

    res.status(400).send('Preencha todos os campos!');
})

router.post('/comprar', async (req, res) => {
    const { titulo } = req.body;

    const data = await lerJSON();

    const livro = data.livros.find(livro => livro.titulo === titulo);

    if(!livro){
        res.status(404).send('Livro não encontrado!');
        return;
    }

    if(livro.quantidade === 0){
        res.status(400).send('Livro fora de estoque!');
        return;
    }

    livro.quantidade--;

    escreverJSON(data);

    res.json({ mensagem: 'Livro comprado com sucesso!', livro})


})

module.exports = router;