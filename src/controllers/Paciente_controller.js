const database = require('../config/database')
const Paciente = require('../models/Paciente')

class pacienteController{
     static async index(req, res){
        let paciente = await Paciente.findAll();

        res.send(JSON.stringify(paciente));
    }
    static async show(req, res){
        const {id} = req.params;
        let paciente = await Paciente.findByPk(id);

        res.send(JSON.stringify(paciente))
    }
    static async create(req, res){
        const { nome, cpf, datanascimento, telefone } = req.body;
        let paciente = await Paciente.create({
            nome: nome,
            cpf: cpf,
            datanascimento: datanascimento,
            telefone: telefone
        });
        
        paciente.save();

        res.send(JSON.stringify(paciente));
    }
    static async update(req, res){
        const {id} = req.params;
        const { nome, cpf, datanascimento, telefone } = req.body;

        let paciente = await Paciente.findByPk(id)
        if(nome !== undefined) Paciente.nome = nome;
        if(cpf !== undefined) Paciente.cpf = cpf;
        if(datanascimento !== undefined) Paciente.datanascimento = datanascimento;
        if(telefone !== undefined) Paciente.telefone = telefone;

        await paciente.save();

        res.send(JSON.stringify({ success: true }))
    }
    static async delete(req, res){
        const { id } = req.params;
        let paciente = await Paciente.findByPk(id);
            paciente.destroy();
            res.send(JSON.stringify({success: true}))
    }
}

module.exports = pacienteController