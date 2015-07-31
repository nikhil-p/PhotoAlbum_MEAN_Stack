// grab the mongoose module
var mongoose = require('mongoose');

// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Photo', {
    title: {type: String, default: ''},
    date: { type: Date, default: Date.now },
    category: {type: String, default: ''},
    comments: {type: String, default: ''}
});
