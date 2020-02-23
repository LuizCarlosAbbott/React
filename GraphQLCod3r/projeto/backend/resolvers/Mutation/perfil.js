const db = require('../../config/db')
const { perfil: obterPerfil } = require('../Query/perfil')

module.exports = {
    async novoPerfil(_, { dados }, ctx) {
        ctx && ctx.validarAdmin();
        try {
            const [ result ] = await db('perfis')
                .insert(dados)
                .returning('*');
            return db('perfis')
                .where({ id: result.id }).first()
        } catch(e) {
            throw new Error(e.sqlMessage)
        }
    },
    async excluirPerfil(_, args, ctx) {
        ctx && ctx.validarAdmin();
        try {
            const perfil = await obterPerfil(_, args)
            if(perfil) {
                const { id } = perfil
                await db('usuarios_perfis')
                    .where({ perfil_id: id }).delete()
                await db('perfis')
                    .where({ id }).delete()
            }
            return perfil
        } catch(e) {
            throw new Error(e.sqlMessage)
        }
    },
    async alterarPerfil(_, { filtro, dados }, ctx) {
        ctx && ctx.validarAdmin();
        try {
            const perfil = await obterPerfil(_, { filtro })
            if(perfil) {
                const { id } = perfil
                await db('perfis')
                    .where({ id })
                    .update(dados)
            }
            return { ...perfil, ...dados }
        } catch(e) {
            throw new Error(e.sqlMessage)
        }
    }
}