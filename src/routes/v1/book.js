const express = require('express');
const router = express.Router();
const ctrl = require('../../controllers/book');

router.get('/:id', ctrl.getById);
router.put('/:id', ctrl.put);
router.delete('/:id', ctrl.deleteOne);
router.get('/', ctrl.get);
router.post('/', ctrl.post);

module.exports = router;
