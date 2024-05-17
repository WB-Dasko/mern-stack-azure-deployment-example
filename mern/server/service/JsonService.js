'use strict';
const mongoose = require('mongoose');
const problem = require('../utils/problem');
const StatusDataModel = mongoose.model('StatusData', require('../models/StatusData').StatusData);
const TripDataModel = mongoose.model('TripData', require('../models/TripData').TripData);


/**
 *
 * body Json_Data_body  (optional)
 * xDataType String  (optional)
 * no response value expected for this operation
 **/
exports.jsonDataPOST = async function (body, xDataType) {
if ("TripData" in body) {

    try {
      const tripData = new TripDataModel(body)
      await tripData.save();
    } catch (error) {
      throw new problem.Problem(problem.E_SERVER_FAULT,
        "Failed to save tripData.");
    }

    return tripData;
  }
 

  else {
    try {
      const statusData = new StatusDataModel(body)
      await statusData.save();
    } catch (error) {
      throw new problem.Problem(problem.E_SERVER_FAULT,
        "Failed to save statusData.");
    }

    return statusData;
  }

  //   return new Promise(function(resolve, reject) {
  //     resolve();
  //   });
  // }
}

