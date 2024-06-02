const fs = require('fs');

async function lerJSON() {
    try {
        const jsonString = fs.readFileSync('./livros.json', 'utf8');
        return JSON.parse(jsonString);
    } catch (err) {
        console.log('Erro ao ler o arquivo JSON:', err);
        return null;
    }
}


async function escreverJSON(livros) {
    try {
        const jsonString = JSON.stringify(livros, null, 2);
        fs.writeFileSync('./livros.json', jsonString, 'utf8');
        console.log('Arquivo JSON atualizado com sucesso!');
    } catch (err) {
        console.log('Erro ao escrever no arquivo JSON:', err);
    }
}

module.exports = { lerJSON, escreverJSON };