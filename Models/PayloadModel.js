var mongoose = require('mongoose');
var messageSchema = mongoose.Schema({
    DevEUI: {
        type: String,
    },
    PayLoadHex: {
        type: String,
    },
    Date: {
        type: Date,
    }
});

var Payload = module.exports = mongoose.model('Payload', messageSchema);
module.exports.get = function (callback, limit) {
    Contact.find(callback).limit(limit);
}
