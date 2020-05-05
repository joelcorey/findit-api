const express = require('express')
const uuid = require('uuid/v4')
const logger = require('../logger')

const urlRouter = express.Router()
const bodyParser = express.json()

urlRouter
  .route('/url')
  .get((req, res) => {
    
    res.json(lists);
  })
  .post(bodyParser, (req, res) => {
    // move implementation logic into here
    const { header, cardIds = [] } = req.body;
  
    if (!header) {
      logger.error(`Header is required`);
      return res
        .status(400)
        .send('Invalid data');
    }
  
    // check card IDs
    if (cardIds.length > 0) {
      let valid = true;
      cardIds.forEach(cid => {
        const card = cards.find(c => c.id == cid);
        if (!card) {
          logger.error(`Card with id ${cid} not found in cards array.`);
          valid = false;
        }
      });
  
      if (!valid) {
        return res
          .status(400)
          .send('Invalid data');
      }
    }
  
    // get an id
    const id = uuid();
  
    const list = {
      id,
      header,
      cardIds
    };
  
    lists.push(list);
  
    logger.info(`List with id ${id} created`);
  
    res
      .status(200)
      .location(`http://localhost:8000/list/${id}`)
      .json({id});

    
  })


module.exports = urlRouter