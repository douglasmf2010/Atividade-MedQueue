const connection = require('../config/database');
const {DataTypes} = require('sequelize');

const paciente = connection.define("paciente", { 
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    cpf:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    datanascimento:{
        type: DataTypes.DATE,
        allowNull: false,
    },
    telefone:{
        type: DataTypes.STRING,
        allowNull: false
    },
},
    {
        tableName: "pacientes",
        timestamps: true
    }
);

module.exports = paciente;
