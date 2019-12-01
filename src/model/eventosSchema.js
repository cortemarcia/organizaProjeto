const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const EventosSchema = new Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true, required: true },
    nome_do_evento: { type: String, required: true },
    data_do_evento: { type: String, required: true },
    endereco: { type: String, required: true },
    presenca_confirmados: { type: String, required: true },//[] usar lista ?
    nao_confirmados: { type: string, required:false }//[] usar lista ?

})

const EventosModel = mongoose.model('Eventos', EventosSchema);

module.exports = EventosModel;