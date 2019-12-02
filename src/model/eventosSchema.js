const mongoose = require('mongoose');
const  AlunosSchema  = require('./alunosSchema')
const Schema = mongoose.Schema;
const eventosSchema = new Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true, required: true },
    nome_do_evento: { type: String, required: true },
    data_do_evento: { type: String, required: true },
    endereco: { type: String, required: true },
    presenca_confirmados: { type: String, required: true },//[] usar lista ?
    nao_confirmados: { type: String, required: false },
    alunos:  [AlunosSchema],

})

const EventosModel = mongoose.model('Eventos', eventosSchema);

module.exports = EventosModel;