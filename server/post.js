var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
    imageLink: String
});

module.exports = mongoose.model('Post', PostSchema);
