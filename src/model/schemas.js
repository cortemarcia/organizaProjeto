const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AlunosSchema = new Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true, required: true },
    nome: { type: String, required: true },
    email: { type: String, required: true },
    CPF: { type: String, required: true },
    Telefone: {type: String, required: true}
})

const EventosSchema = new Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true, required: true },
    nome: { type: String, required: true },
    data: { type: String, required: true },
    horario: {type: String, required: true},
    endereco: { type: String, required: true }
    
})

const AulaSchema = new Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true, required: true },
    semana: { type: String, required: true },
    materia: { type: String, required: true },  
    data: { type: String, required: true },
    professora: {type: String, required: true}
    
})


const AdminSchema = new Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true, required: true },
    nome: { type: String, required: true },
    CPF: { type: String, required: true },
    email: { type: String, required: true },
    senha: {type: String, required: true}
})

EventosSchema.add({
    alunos:  [AlunosSchema]
})

const EventosModel = mongoose.model('Eventos', EventosSchema);
const AlunosModel = mongoose.model('Alunos', AlunosSchema);
const AulasModel = mongoose.model('Aulas', AulaSchema);
const AdminModel = mongoose.model('/Admin', AdminSchema )

module.exports = { EventosModel, AlunosModel, AulasModel, AdminSchema }