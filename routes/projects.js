var express = require('express');
var router = express.Router();
var userModel = require('../models/users');
var projectModel = require("../models/projects");
var uniqid = require('uniqid');
var fs = require('fs');


const apiKey = process.env.CLOUDINARY_API_KEY;
const apiSecret = process.env.CLOUDINARY_API_SECRET;

var cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dynf7eh8t',
  api_key: `${apiKey}`,
  api_secret: `${apiSecret}`
});



/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// Create One Project
router.post('/add', async (req, res, next) => {
  let image;
  if (req.files) {
    image = req.files.image;
  }
  let token = req.body.token;
  let title = req.body.title;
  let description = req.body.description;
  let resources = req.body.resources.split('|');
  let siteUrl = req.body.siteUrl;
  let githubUrl = req.body.githubUrl;
  let creationDate = req.body.creationDate;

  if (!title || !description || resources[0].length === 0 || !creationDate || !image) {
    res.json({ result: false, error: 'Tous les champs avec une * sont obligatoires' });
  } else if (image.size > 10000000) {
    res.json({ result: false, error: 'Le fichier est trop volumineux' });
  } else {

    let user = await userModel.findOne({ token: token });
    if (!user){
      res.json({ result: false, error: "Utilisateur inconnu" });
    } else {
      var imgPath = './tmp/' + uniqid() + '.' + image.mimetype.split('/').pop();
      var resultCopy = await image.mv(imgPath);

      console.log("resultCopy = ", resultCopy)
// if (!resultCopy) {
      if (resultCopy === undefined) {
        var resultCloudinary = await cloudinary.uploader.upload(imgPath, {
          folder: 'portfolio',
          use_filename: true
        });
        if (!resultCloudinary) {
          res.json({ result: false, error: "Upload de l'image impossible" });
        } else {
          const newProject = new projectModel({
            imageUrl: resultCloudinary.url,
            title,
            description,
            resources,
            siteUrl,
            githubUrl,
            creationDate,
            userId: user._id
          });
          var savedProject = await newProject.save();
          if (!savedProject) {
            res.json({ result: false, error: 'Nous rencontrons des difficultées à joindre la base de donées. Veuillez recommencer ultérieurement.' });
          } else {
            res.json({ result: true, success: 'Projet enregistré' });
          }
        }
      }
    }
    fs.unlinkSync(imgPath);
  }
})

// Read Projects
router.get('/get', async (req, res, next) => {
  var projects = await projectModel.find().populate('userId')
  if (!projects) {
    res.json({ result: false, error: "Nous avons rencontré un problème, recommencez" });
  } else {
    res.json({ result: true, projects });
  }
});

// Update One Project
router.post('/update', async (req, res, next) => {
  let image
  if (req.files) {
    image = req.files.image;
  }
  let publicId = req.body.publicId;
  let id = req.body.id;
  let title = req.body.title;
  let description = req.body.description;
  let resources = req.body.resources.split('|');
  let siteUrl = req.body.siteUrl;
  let githubUrl = req.body.githubUrl;
  let updateDate = req.body.updateDate;

  console.log('resources =>', resources)

  if (!title || !description || resources[0].length === 0) {
    res.json({ result: false, error: 'Tous les champs avec une * sont obligatoires' })
  } else {
    if (typeof image !== 'undefined') {
      if (image.size > 10000000) {
        res.json({ result: false, error: 'Le fichier est trop volumineux' })
      } else {
        var imgPath = './tmp/' + uniqid() + '.' + image.mimetype.split('/').pop();
        var resultCopy = await image.mv(imgPath);

        if (!resultCopy) {
          var resultCloudinaryUpload = await cloudinary.uploader.upload(imgPath, {
            folder: 'portfolio',
            use_filename: true
          });
          if (!resultCloudinaryUpload) {
            res.json({ result: false, error: "Upload de l'image impossible" });
          } else {
            var updatedProject = await projectModel.updateOne(
              {
                _id: id
              },
              {
                imageUrl: resultCloudinaryUpload.url,
                title,
                description,
                resources,
                siteUrl,
                githubUrl,
                updateDate
              }
            );
            if (!updatedProject) {
              res.json({ result: false, error: 'Mise à jour du projet impossible' });
            } else {
              var resultCloudinaryDestroy = await cloudinary.uploader.destroy(`portfolio/${publicId}`);
              if(!resultCloudinaryDestroy) {
                res.json({ result: false, error: "Suppression de l'ancienne image impossible" });
              } else {
                res.json({ result: true, success: 'Projet modifié' });
              }
            }
          }
        }
        fs.unlinkSync(imgPath);
      }
    } else {
      var updatedProject = await projectModel.updateOne(
        {
          _id: id
        },
        {
          title,
          description,
          resources,
          siteUrl,
          githubUrl,
          updateDate
        }
      )
      if (!updatedProject) {
        res.json({ result: false, error: 'Nous rencontrons des difficultées à joindre la base de donées. Veuillez recommencer ultérieurement.' });
      } else {
        res.json({ result: true, success: 'Projet modifié' });
      }
    }
  }
})

// Delete One Project
router.delete('/delete/:id/:publicId', async (req, res, next) => {
  let id = req.params.id
  let publicId = req.params.publicId
  var deletedProject = await projectModel.deleteOne({ _id: id })
  if(!deletedProject){
    res.json({ result: false, error: 'Suppression du projet impossible' })
  } else {
    var resultCloudinary = await cloudinary.uploader.destroy(`portfolio/${publicId}`);
    if (!resultCloudinary) {
      res.json({ result: false, error: "Suppression de l'image impossible" })
    } else {
      res.json({ result: true, success: 'Projet supprimé.' })
    }
  }
})

module.exports = router;