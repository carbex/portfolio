var express = require('express');
var router = express.Router();
var projectModel = require("../models/projects");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Read Projects
router.get('/get', async (req, res, next) => {
    var projects = await projectModel.find()
    if (!projects) {
      res.json({ result: false, error: "Il manque des données" });
    } else {
      res.json({ result: true, projects });
    }
  });

module.exports = router;