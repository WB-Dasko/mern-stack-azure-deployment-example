'use strict';

var utils = require('../utils/writer.js');
var Json = require('../service/JsonService');

module.exports.jsonDataPOST = function jsonDataPOST(req, res, next, body, xDataType) {
  //We only handle Status data for now, Trip wil follow later on
  // if (xDataType=== "Status") {
  Json.jsonDataPOST(body, xDataType)
    .then(function (response) {
      res.status(200);
      res.end("");
      utils.writeJson(res, response)
      // let newDocument = req.body;
      // newDocument.created = new Date();
      // collection.insertOne(newDocument);;
    })
    .catch(function (response) {

      utils.writeJson(res, response);
    });
  // }
};
