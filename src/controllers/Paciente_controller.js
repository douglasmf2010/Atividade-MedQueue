const database = require('../config/database');
const Paciente = require('../models/Paciente');

class pacienteController {
  static async index(req, res) {
    let paciente = await Paciente.findAll({
      order: [['prioridade', 'ASC']],
    });

    res.json(paciente);
  }
  static async show(req, res) {
    const { id } = req.params;
    let paciente = await Paciente.findByPk(id);

    res.send(JSON.stringify(paciente));
  }
  static async create(req, res) {
    const { nome, cpf, datanascimento, telefone, prioridade } = req.body;
    let paciente = await Paciente.create({
      nome: nome,
      cpf: cpf,
      datanascimento: datanascimento,
      telefone: telefone,
      prioridade: prioridade,
    });

    paciente.save();

    res.send(JSON.stringify(paciente));
  }
  static async update(req, res) {
    const { id } = req.params;
    const { nome, cpf, datanascimento, telefone, prioridade } = req.body;

    let paciente = await Paciente.findByPk(id);
    if (nome !== undefined) paciente.nome = nome;
    if (cpf !== undefined) paciente.cpf = cpf;
    if (datanascimento !== undefined) paciente.datanascimento = datanascimento;
    if (telefone !== undefined) paciente.telefone = telefone;
    if (prioridade !== undefined) paciente.prioridade = prioridade;

    await paciente.save();

    res.send(JSON.stringify({ success: true }));
  }
  static async delete(req, res) {
    const { id } = req.params;
    let paciente = await Paciente.findByPk(id);
    paciente.destroy();
    res.send(JSON.stringify({ success: true }));
  }

  static async chamarProximo(req, res) {
    const paciente = await Paciente.findOne({
        where: {
            status: "Em espera"
        },
        order: [
            ['prioridade', 'ASC'],
            ['datanascimento', 'ASC']
        ],
        
    })
    paciente.status = 'Em andamento';
    console.log(paciente)
    await paciente.save();

    res.send(JSON.stringify({ success: true }))
  }
  static async finalizar(req, res) {
    const paciente = await Paciente.findOne({
        where: {
            status: "Em andamento"
        },
        
    })
    paciente.status = 'Cumprido';
    await paciente.save();

     res.send(JSON.stringify({ success: true }))
  }
}

module.exports = pacienteController;
