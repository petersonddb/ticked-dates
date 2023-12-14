const mongoose = require('mongoose')

const TickedDateSchema = new mongoose.Schema({
  date: {
    type: String,
    validate: {
      validator: (date) => new Date(date) != 'Invalid Date',
      type: 'invalid date',
      message: 'Data não está em formato válido',
    },
    required: [true, 'Data não foi informada'],
  }
})

const TickedDate = mongoose.model('TickedDate', TickedDateSchema)

module.exports = TickedDate
