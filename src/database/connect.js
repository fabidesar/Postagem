const mongoose = require("mongoose");
const conectToDatabase = async () => {
  await mongoose.connect(
    `mongodb+srv://tristao:${process.env.MONGODB_PASSWORD}@paginadepostagens.haiipac.mongodb.net/?retryWrites=true&w=majority`,
    (error) => {
      if (error) {
        return console.log(
          "Ocorreu um erro ao se conectar com o banco de dados: ",
          error
        );
      }
      return console.log("Conexão ao banco de dados realizada com sucesso.");
    }
  );
};

module.exports = conectToDatabase;
