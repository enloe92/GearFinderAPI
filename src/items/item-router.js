const express = require('express')
const app = require('../app')
const ItemsService = require('./item-service')


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
  .route('/warrior/arms')
  .get((req, res, next) => {
    const knexInstance = req.app.get('db');
    ItemsService.getArmsWarrior(knexInstance)
      .then(items => {
        res.json(items)
      })
      .catch(next)
  })

  itemsRouter
  .route('/warrior/protection')
  .get((req, res, next) => {
    const knexInstance = req.app.get('db');
    ItemsService.getProtectionWarrior(knexInstance)
      .then(items => {
        res.json(items)
      })
      .catch(next)
  })

  itemsRouter
  .route('/hunter/marksman')
  .get((req, res, next) => {
    const knexInstance = req.app.get('db');
    ItemsService.getMarksmanHunter(knexInstance)
      .then(items => {
        res.json(items)
      })
      .catch(next)
  })

  itemsRouter
  .route('/hunter/beastmastery')
  .get((req, res, next) => {
    const knexInstance = req.app.get('db');
    ItemsService.getBeastMasteryHunter(knexInstance)
      .then(items => {
        res.json(items)
      })
      .catch(next)
  })

  itemsRouter
  .route('/hunter/survival')
  .get((req, res, next) => {
    const knexInstance = req.app.get('db');
    ItemsService.getSurvivalHunter(knexInstance)
      .then(items => {
        res.json(items)
      })
      .catch(next)
  })



module.exports = itemsRouter


