const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const passport = require('./index');

/* GET home page. */
router.post('/', passport.authenticate('local', {session: false}), function(req, res, next) {
  if (req.user.message) {
    return res.json(req.user);
  }
  if (req.user.type) {
    res.json({
      user: req.user,
      type: 'admin',
      token: jwt.sign({
          id: req.user.id,
          username: req.user.username,
          studentID: req.user.studentID,
          email: req.user.email
      }, 'secret', {
          expiresIn: '1h'
      })
  });
  }
  else res.json({
      user: req.user,
      token: jwt.sign({
          id: req.user.id,
          username: req.user.username,
          studentID: req.user.studentID,
          email: req.user.email
      }, 'secret', {
          expiresIn: '1h'
      })
  });
});

module.exports = router;
