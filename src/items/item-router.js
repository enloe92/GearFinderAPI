const express = require('express')
const app = require('../app')
const ItemsService = require('./item-service')
const warriorServices = require('./warrior/warrior-services')

const itemsRouter = express.Router()



itemsRouter
  .route('/')
  .get((req, res, next) => {
    const knexInstance = req.app.get('db');
    ItemsService.getAllItems(knexInstance)
      .then(items => {
        res.json(items)
      })
      .catch(next)
  })
  
  itemsRouter
  .route('/warrior/fury')
  .get((req, res, next) => {
    const knexInstance = req.app.get('db');
    ItemsService.getFuryWarrior(knexInstance)
      .then(items => {
        res.json(items)
      })
      .catch(next)
  })

  itemsRouter
  .route('/warrior/fury')
  .get((req, res, next) => {
    const knexInstance = req.app.get('db');
    warriorServices.getFuryWarriorHelm(knexInstance)
      .then(items => {
        res.json(items)
      })
      .catch(next)
  })

module.exports = itemsRouter


