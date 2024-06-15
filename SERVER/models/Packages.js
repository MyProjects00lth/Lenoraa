const mongoose = require('mongoose');

const PackageSchema = new mongoose.Schema({
    packageName: {
        type: String,
        required: true
    },
    pkgDetails: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    }
})