const mongoose = require('mongoose');

const oneDayFHDPkgSchema = new mongoose.Schema({
    basic: {
        type: String,
        required: true
    },
    silver: {
        type: String,
        required: true
    },
    gold: {
        type: String,
        required: true
    },
    platinum: {
        type: String,
        required: true
    },
    goingAway: {
        type: String,
        required: true
    },
    droneCamera: {
        type: String,
        required: true
    },
    highlightVideo: {
        type: String,
        required: true
    },
    pendriver16: {
        type: String,
        required: true
    },
    pendriver32: {
        type: String,
        required: true
    },
    pendriver64: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('OneDayFHDPkg', oneDayFHDPkgSchema);