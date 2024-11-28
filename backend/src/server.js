const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./config/database");
const usuariosRoutes = require("./routes/usuarios");
const vagasRoutes = require("./routes/vagas");
const cors = require("cors");
const helmet = require("helmet");

const app = express();

// Middlewares globais
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());

// Sincronizar o banco de dados
sequelize
  .sync()
  .then(() => {
    console.log("Database synchronized");
  })
  .catch((err) => {
    console.error("Unable to synchronize the database:", err);
  });

// Usar as rotas importadas
app.use("/api/usuarios", usuariosRoutes);
app.use("/api/vagas", vagasRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
