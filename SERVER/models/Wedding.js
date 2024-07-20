const mongoose = require('mongoose');

const WeddingSchema = new mongoose.Schema({
    couples: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    videoLink: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Wedding', WeddingSchema);
