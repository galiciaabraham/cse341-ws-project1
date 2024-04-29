const mongodb = require('../model/dbConnection');
const inputId = require('mongodb').ObjectId;

const contController = {};

contController.getAll = async (req, res) => {
  const data = await mongodb.getDb().db().collection('contacts').find();
  data.toArray().then((contacts) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200);
    res.send(contacts);
  });
};

contController.getSingle = async (req, res) => {
  const contactId = new inputId(req.params.contactId);
  const data = await mongodb.getDb().db().collection('contacts').find({ _id: contactId }).toArray();
  res.setHeader('Content-Type', 'application/json');
  res.status(200);
  res.send(data);
};

module.exports = contController;
