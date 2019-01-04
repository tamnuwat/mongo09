var mongoose = require('mongoose');
var messageSchema = mongoose.Schema({
    DevEUI: {
        type: String,
    },
    Value: {
        type: String,
    },
    Date: {
        type: Date,
    }
});

var Temperature = module.exports = mongoose.model('Temperature', messageSchema);
module.exports.get = function (callback, limit) {
    Contact.find(callback).limit(limit);
}
