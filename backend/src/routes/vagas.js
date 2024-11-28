const express = require("express");
const router = express.Router();
const vagaRepository = require("../repositories/vagaRepository");

// Retorna todas as vagas
router.get("/", async (req, res) => {
  try {
    const jobs = await vagaRepository.findAll();
    res.json({ jobs });
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar as vagas" });
  }
});

// Retorna a vaga pelo id
router.get("/:id", async (req, res) => {
  try {
    const job = await vagaRepository.findById(req.params.id);
    if (job) {
      res.json({ job });
    } else {
      res.status(404).json({ error: "Vaga não encontrada" });
    }
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar a vaga" });
  }
});

// Cria uma nova vaga
router.post("/", async (req, res) => {
  try {
    const job = await vagaRepository.create(req.body);
    res.status(201).json({ job });
  } catch (err) {
    res.status(500).json({ error: "Erro ao criar a vaga" });
  }
});

// Faz Update de uma vaga
router.put("/:id", async (req, res) => {
  try {
    const job = await vagaRepository.update(req.params.id, req.body);
    if (job) {
      res.json({ job });
    } else {
      res.status(404).json({ error: "Vaga não encontrada" });
    }
  } catch (err) {
    res.status(500).json({ error: "Erro ao atualizar a vaga" });
  }
});

// Deleta uma vaga
router.delete("/:id", async (req, res) => {
  try {
    const job = await vagaRepository.remove(req.params.id);
    if (job) {
      res.json({ job });
    } else {
      res.status(404).json({ error: "Vaga não encontrada" });
    }
  } catch (err) {
    res.status(500).json({ error: "Erro ao excluir a vaga" });
  }
});

module.exports = router;
