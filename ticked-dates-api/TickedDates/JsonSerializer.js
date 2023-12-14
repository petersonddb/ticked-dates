const JsonSerialier = require('jsonapi-serializer').Serializer

module.exports = new JsonSerialier('TickedDate', {
  attributes: ['date']
})
