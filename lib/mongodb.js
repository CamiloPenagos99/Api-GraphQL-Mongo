const mongoose = require("mongoose");
require("dotenv").config();

// Conexión a Base de datos
 const connec = async()=> {
  const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.6mdyq.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
  console.log("Intentando conexion");
   return mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("Base de datos conectada");
      return true;
    })
    .catch((e) => {
      console.log("error db:", e);
      return false;
    });
}

module.exports = connec;
