const express = require('express');
const router = express.Router();
const Canteen = require('../models/canteen');

// READ
router.get('/canteen', async (req, res) => {
  const items = await Canteen.find();
  res.render('canteen/index', { items });
});

// DELETE
router.post('/canteen/:id/delete', async (req, res) => {
  await Canteen.findByIdAndDelete(req.params.id);
  res.redirect('/canteen');
});

module.exports = router;