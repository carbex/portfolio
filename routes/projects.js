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
    if (projects) {
      res.json({ result: true, projects });
    } else {
      res.json({ result: false, error: "Nous rencontrons des difficultées à joindre la base de donées. Veuillez recommencer ultérieurement." });
    }
  });

module.exports = router;