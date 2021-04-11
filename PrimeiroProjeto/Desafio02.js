/* Desafio 

- Se o arquivo não existe, criar o arquivo com conteúdo
- Se o arquivo já existe:
    - Manter o contéudo do arquivo existente
    - Adicionar o novo conteúdo */

const fs = require('fs');

const arquivo = 'Desafio02.txt';

fs.writeFileSync(arquivo, 'Conteúdo inicial');
fs.appendFileSync(arquivo, '\nConteúdo adicionado');

//TESTE DO MESMO DESAFIO UTILIZANDO FLAG "A"
const arquivo2 = 'Desafio02_teste.txt';

fs.writeFileSync(arquivo2,'Conteúdo inicial');
fs.writeFileSync(arquivo2,'\nConteúdo adicionado',{flag:"a"});

//DOIS METODOS TIVERAM O MESMO RESULTADO.
//OBS.: SE O ARQUIVO NÃO EXISTIR PREVIAMENTE A FUNÇÃO appendFileSync CRIA O ARQUIVO E INSERE O CONTEÚDO ESPECIFICADO. 