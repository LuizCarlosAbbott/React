const { perfis } = require('../data/db')

module.exports = {
    salario(usuario) {
        return usuario.salario_real
    },
    perfil(usuario) {
        const psels = perfis
            .filter(p => p.id === usuario.perfil_id)
        return psels ? psels[0] : null
    }
}