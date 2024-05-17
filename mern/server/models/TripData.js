'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

exports.TripData = new Schema({
    "ChassisNumber": String,
    "ReferenceUserName": String,
    "ReferenceCustomerName": String,
    "TripData": {}
}).set('timestamps', true);

