const db = require("../../config/db");

module.exports = {
  async usuarios() {
    return await db("usuarios");
  },
  async usuario(_, { filtro }) {
    if (!filtro) return null;
    if (filtro.id)
      return await db("usuarios")
        .select()
        .where("id", filtro.id)
        .first();
    else if (filtro.email)
      return await db("usuarios")
        .select()
        .where("email", filtro.email)
        .first();
    else return null;
  }
};
