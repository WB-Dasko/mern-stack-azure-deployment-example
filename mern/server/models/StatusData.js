'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

exports.StatusData = new Schema({
    "ChassisNumber": String,
    "CtuId": String,
    "Plate": String,
    "ReferenceUserName": String,
    "ReferenceCustomerName": String,
    "ExternalOrderReference": String,
    "ReceiveTime": String,
    "DeviceTime": String,
    "StatusData": [],
    "Reason": {},
    "SystemConfig": {},
    "CustomProperties": {},
    "additionalProperties": Boolean
}).set('timestamps', true);

