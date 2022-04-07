const router = require('express').Router();
const expoController = require('../Controllers/expo.controllers')


//routes pour les expos
router.get('/', expoController.readExpo);
router.post('/', expoController.createExpo);
//route pour modifier les expos
router.put('/:id', expoController.updateExpo);
//route pour supprimer les expos
router.delete('/:id', expoController.deleteExpo);

module.exports = router;