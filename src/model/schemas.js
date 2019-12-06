const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AlunosSchema = new Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true, required: true },
    nome: { type: String, required: true },
    email: { type: String, required: true },
    senha: { type: String, required: true },
    foto: { type: String, required: true },
    confirmacaoPresenca: { type: Boolean, required:true },
    CPF: { type: Number, required: true },
})

const EventosSchema = new Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true, required: true },
    nome_do_evento: { type: String, required: true },
    data_do_evento: { type: String, required: true },
    endereco: { type: String, required: true },
    presenca_confirmados: { type: String, required: true },
    nao_confirmados: { type: String, required: false },
})

AlunosSchema.add({
    eventos: [EventosSchema]
})

EventosSchema.add({
    alunos: [AlunosSchema]
})

const EventosModel = mongoose.model('Eventos', EventosSchema);
const AlunosModel = mongoose.model('Alunos', AlunosSchema);

module.exports = { EventosModel, AlunosModel }