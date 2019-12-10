const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AlunosSchema = new Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true, required: true },
    nome: { type: String, required: true },
    email: { type: String, required: true },
    CPF: { type: String, required: true }
})

const EventosSchema = new Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true, required: true },
    nome: { type: String, required: true },
    data: { type: String, required: true },
    endereco: { type: String, required: true }
    
})

const AulaSchema = new Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true, required: true },
    materia: { type: String, required: true },
    semana: { type: String, required: true },
    data: { type: String, required: true },
    professora: {type: String, required: true}
    
})



AlunosSchema.add({
    eventos:[EventosSchema]
})

EventosSchema.add({
    alunos:  [AlunosSchema]
})

const EventosModel = mongoose.model('Eventos', EventosSchema);
const AlunosModel = mongoose.model('Alunos', AlunosSchema);
const AulasModel = mongoose.model('Aulas', AulaSchema);

module.exports = { EventosModel, AlunosModel, AulasModel }