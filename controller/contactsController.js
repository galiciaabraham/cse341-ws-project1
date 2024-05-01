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

contController.addContact = async (req, res) => {
  const contact = {
    "firstName": (req.body.firstName),
    "lastName": (req.body.lastName),
    "email": (req.body.email),
    "favoriteColor": (req.body.favoriteColor),
    "birthday": (req.body.birthday)
  };

  try {
  const response = await mongodb.getDb().db().collection('contacts').insertOne({ contact });
  if (response.acknowledged) {
    res.setHeader('Content-Type', 'application/json');
    res.status(200);
    res.send(response.insertedId);
  }
  } catch (error) {
    console.log(error);
  };
}

contController.updateContact = async (req, res) => {
  const contactId = new inputId(req.params.contactId);
  const contact = {
    "firstName": (req.body.firstName),
    "lastName": (req.body.lastName),
    "email": (req.body.email),
    "favoriteColor": (req.body.favoriteColor),
    "birthday": (req.body.birthday)
  };

  try {
  const response = await mongodb.getDb().db().collection('contacts').replaceOne({ _id: contactId }, contact);
  if (response.acknowledged) {
    res.setHeader('Content-Type', 'application/json');
    res.status(200);
    res.send(response.insertedId);
  }
  } catch (error) {
    console.log(error);
  };
}

module.exports = contController;
