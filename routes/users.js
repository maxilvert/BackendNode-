/***********************************/
/*** Import des module nécessaires */
const express = require('express')
const userCtrl = require('../controllers/user')
const cors = require('cors');
/***************************************/
/*** Récupération du routeur d'express */
let router = express.Router()

/*********************************************/
/*** Middleware pour logger dates de requete */



/**********************************/
/*** Routage de la ressource User */

router.get('/', userCtrl.getAllUsers)

router.get('/:id', userCtrl.getUser)

router.put('', userCtrl.addUser)

router.patch('/:id',cors(), userCtrl.updateUser)

router.post('/untrash/:id', userCtrl.untrashUser)

router.delete('/trash/:id', userCtrl.trashUser)
    
router.delete('/:id', userCtrl.deleteUser)

module.exports = router
