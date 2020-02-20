const db = require('../config/db');

async function salvarUsuario(nome, email, senha) {
    // se ja existir nome/email, fazer update
    const query = await db.raw(`SELECT id FROM usuarios WHERE nome = ${nome} OR email = ${email}`)[0];
    console.log(query);

    if(query === undefined) 
        await db.raw(`
            INSERT INTO usuarios 
                (nome, email, senha)
            VALUES 
                ("${nome}", "${email}", "${senha}")
        `).returning('*')
        .then(res => console.log(res))
    // else const result = false;
    // console.log(result);
}

async function salvarPerfil(nome, rotulo) {

}

async function adicionarPerfis(usuario, ...perfil) {

}

async function executar() {
    const usuario = await salvarUsuario('Ana3',
        'ana3@empresa.com.br', '123456');
    const perfilA = await salvarPerfil('rh', 'Pessoal')
    const perfilB = await salvarPerfil('fin', 'Financeiro')

    console.log(usuario);
    console.log(perfilA);
    console.log(perfilB);

    await adicionarPerfis(usuario, perfilA, perfilB);
}

executar()
    .catch(err => console.log(err))
    .finally(() => db.destroy())