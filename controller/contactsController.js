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
    res.send(`Created contact ID: ${response.insertedId}`);
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
  if (response.modifiedCount > 0) {
    res.status(200).send('Status ok: 200');
  }
  } catch (error) {
    console.log(error);
  };
}

contController.deleteContact = async (req, res) => {
  const contactId = new inputId(req.params.contactId);
  try {
  const response = await mongodb.getDb().db().collection('contacts').deleteOne({ _id: contactId });
  if (response.deletedCount > 0) {
    res.status(200).send(`Contact Id ${contactId} has been deleted`);
  }
  } catch (error) {
    res.status(500).send(`Contact Id ${contactId} could not be deleted, check documentation and try again`);
    console.log(error);
  };
}

module.exports = contController;
