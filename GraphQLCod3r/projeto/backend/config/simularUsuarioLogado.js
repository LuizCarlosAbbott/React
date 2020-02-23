const db = require('./db');
const { getUsuarioLogado } = require('../resolvers/comum/usuario');

const sql = `
    SELECT
        u.*
    FROM
        usuarios u,
        usuarios_perfis up,
        perfis p
    WHERE
        up.usuario_id = u.id and
        up.perfil_id = p.id and
        u.ativo = true and
        p.nome = :nomePerfil
    ORDER BY u.id
    LIMIT 1;
`

const getUsuario = async nomePerfil => {
    const res = await db.raw(sql, { nomePerfil })
    // console.log(res)
    return res ? res.rows[0] : null;
}

module.exports = async req => {
    const usuario = await getUsuario('admin');
    if(usuario) {
        const { token } = await getUsuarioLogado(usuario);
        req.headers = {
            authorization: `Bearer ${token}`
        }
    }
}