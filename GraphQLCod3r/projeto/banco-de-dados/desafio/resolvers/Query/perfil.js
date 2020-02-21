const db = require('../../config/db')

module.exports = {
    async perfis() {
        return await db('perfis');
    },
    async perfil(_, { filtro }) {
        if(!filtro) return null;
        if(filtro.id) 
            return await db('perfis')
                .select()
                .where('id', filtro.id)
                .first();
        else if (filtro.nome)
            return await db('perfis')
                .select()
                .where('nome', filtro.nome)
                .first();
        else
            return null;
    }
}