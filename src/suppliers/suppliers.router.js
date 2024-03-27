const router = require('express').Router({ mergeParams: true });
const controller = require('./suppliers.controller');
const methodNotAllowed = require('../errors/methodNotAllowed');

router
  .route('/')
  .get((req, res) => {
    res.json('hello');
  })
  .post(controller.create)
  .all(methodNotAllowed);

router
  // .route('/:supplierId([0-9]+)')
  .route('/:supplierId')
  .put(controller.update)
  .delete(controller.delete)
  .all(methodNotAllowed);
module.exports = router;
