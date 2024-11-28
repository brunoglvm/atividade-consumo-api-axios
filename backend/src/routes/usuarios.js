const express = require("express");
const router = express.Router();
const usuarioRepository = require("../repositories/usuarioRepository");

// Retorna todos os usuários
router.get("/", async (req, res) => {
  try {
    const users = await usuarioRepository.findAll();
    res.json({ users });
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar usuários" });
  }
});

// Retorna o usuário pelo id
router.get("/:id", async (req, res) => {
  try {
    const user = await usuarioRepository.findById(req.params.id);
    if (user) {
      res.json({ user });
    } else {
      res.status(404).json({ error: "Usuário não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar o usuário" });
  }
});

// Cria um novo usuário
router.post("/", async (req, res) => {
  try {
    const user = await usuarioRepository.create(req.body);
    res.status(201).json({ user });
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar o usuário" });
  }
});

// Faz Update de um usuário
router.put("/:id", async (req, res) => {
  try {
    const user = await usuarioRepository.update(req.params.id, req.body);
    if (user) {
      res.json({ user });
    } else {
      res.status(404).json({ error: "Usuário não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar o usuário" });
  }
});

// Deleta um usuário
router.delete("/:id", async (req, res) => {
  try {
    const user = await usuarioRepository.remove(req.params.id);
    if (user) {
      res.json({ user });
    } else {
      res.status(404).json({ error: "Usuário não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao excluir o usuário" });
  }
});

module.exports = router;
