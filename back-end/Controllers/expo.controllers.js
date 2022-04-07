const expoModel = require('../Models/expo.model')
const { uploadErrors } = require("../utils/errors.utils");
const ObjectID = require("mongoose").Types.ObjectId;

// controller d'affichage de toutes les expositions
module.exports.readExpo = (req, res) => {
  expoModel.find((err, data) => {
    if (!err) res.send(data);
    else console.log("Error to get data : " + err);
  }).sort({ createdAt: -1 });
};

// controller de creation de creation de creation de posts
module.exports.createExpo = async (req, res) => {
  console.log(req.body);
  const newExpo = new expoModel({
    expoId: req.body.expoId,
    picture: req.body.picture,
    auteur: req.body.auteur,
    likers: [],
  });

  try {
    const post = await newExpo.save();
    return res.status(201).json(post);
  } catch (err) {
    return res.status(400).send(err);
  }
};

// controller de modification des expos
module.exports.updateExpo = (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  const updatedRecord = {
    picture: req.body.picture,
    prix: req.body.prix
  };

  expoModel.findByIdAndUpdate(
    req.params.id,
    { $set: updatedRecord },
    { new: true },
    (err, data) => {
      if (!err) res.send(data);
      else console.log("Update error : " + err);
    }
  );
};

//controller de suppression d'expo
module.exports.deleteExpo = (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  expoModel.findByIdAndRemove(req.params.id, (err, data) => {
    if (!err) res.send(data);
    else console.log("Delete error : " + err);
  });
};