const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const AlunosSchema = new Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true, required: true },
    nome: { type: String, required: true },
    email: { type: String, required: true },
    senha: { type: String, required: true },
    foto: { type: String, required: true },
    confirmacaoPresenca: { type: Boolean, required:true },
    CPF: { type: Number, required: true }

})

const AlunoModel = mongoose.model('Alunos', AlunosSchema);

module.exports = AlunosModel;