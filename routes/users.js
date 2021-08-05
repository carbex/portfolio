var express = require('express');
var router = express.Router();

var bcrypt = require("bcrypt");
var uid2 = require("uid2");

var userModel = require("../models/users");

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});


/* SignIn
-------------------------------------------------------------*/
router.post('/sign-in', async (req, res, next) => {
  let password = req.body.password
  let login = req.body.login

  if (!password || !login) {
    res.json({ result: false, error: "Veuillez remplir tous les champs" });
  } else {
    let user = await userModel.findOne({ login: login });
    if (!user || !bcrypt.compareSync(password, user.password)) {
      res.json({ result: false, error: "Login ou mot de pass incorrect, veuillez recommencer votre saisie !" });
    } else {
      res.json({ result: true, user: { token: user.token, login: user.login, role: user.role  } });
    }
  }

})

/* SignUP
------------------------------------------------------------- */
router.post('/sign-up', async (req, res, next) => {
  let confirmPassword = req.body.confirmPassword
  let password = req.body.password
  let login = req.body.login

  if (!password || !login || !confirmPassword) {
    res.json({ result: false, error: 'Tous les champs avec une * sont obligatoires' });
  } else if (password !== confirmPassword) {
    res.json({ result: false, error: 'Les mots de passe ne correspondent pas' });
  } else {
    const data = await userModel.findOne({
      login: login,
    });
    if (data) {
      res.json({ result: false, error: 'Utilisateur déjà présent' });
    } else {
      var hash = bcrypt.hashSync(password, 10);
      var newUser = new userModel({
        login: login,
        password: hash,
        token: uid2(32),
        role: 2
      });

      let user = await newUser.save();
      if (!user) {
        res.json({ result: false, error: "L'utilisateur n'a pas pu être ajouté" });
      } else {
        res.json({ result: true, success: 'Utilisateur ajouté' });
      }
    }
  }
})

/* Add all users
---------------------------------------------------------------*/
router.get('/get', async (req, res, next) => {
  var users = await userModel.find()
  if (users) {
    res.json({ result: true, users });
  } else {
    res.json({ result: false, error: "Nous avons rencontré un problème, recommencez" });
  }
});

/* Delete One User
---------------------------------------------------------------*/
router.delete('/delete/:id', async (req, res, next) => {
  var deletedUser = await userModel.deleteOne({ _id: req.params.id })
  if (deletedUser) {
    res.json({ result: true, success: "Utilisateur supprimé" })
  } else {
    res.json({ result: false, error: 'Nous avons rencontré un problème, recommencez' })
  }
})



/* Update
----------------------------------------------------------------*/
router.put('/update', async (req, res, next) => {

  let token = req.body.token
  let login = req.body.login
  let password = req.body.password
  let newPassword = req.body.newPassword
  let confirmNewPassword = req.body.confirmNewPassword
  let firstName = req.body.firstName
  let lastName = req.body.lastName
  let email = req.body.email
  let role = req.body.role

  // console.log('newPass et confirmNewPass => ', newPassword, confirmNewPassword)

  if (!login || !password) {
    res.json({ result: false, error: 'Tous les champs avec une * sont obligatoires' })
  } else {
    let user = await userModel.findOne({ token: token })
    if (!user) {
      res.json({ result: false, error: "Cet utilisateur n'existe pas" });
    } else {
      let checkPassword = bcrypt.compareSync(password, user.password)
      if (!checkPassword) {
        res.json({ result: false, error: 'Mauvais mot de passe' });
      } else {
        if(newPassword.length > 0 && confirmNewPassword.length > 0) {
          if(newPassword.length < 6 || confirmNewPassword.length < 6) {
            res.json({ result: false, error: 'Les mots de passe doivent contenir au moins 6 caratères' });
          } else {
            if (newPassword !== confirmNewPassword) {
              res.json({ result: false, error: 'Les mots de passe ne correspondent pas' });
            } else {
              var newPasswordHash = bcrypt.hashSync(newPassword, 10);
              var updatedUser = await userModel.updateOne(
                {
                  token: token
                },
                {
                  login,
                  password: newPasswordHash,
                  firstName,
                  lastName,
                  email,
                  role
                }
              );
              if (updatedUser) {
                res.json({ result: true, success: 'Utilisateur modifié' });
              } else {
                res.json({ result: false, error: 'Nous avons rencontré un problème, recommencez' });
              }
            }
          }
        } else {
          var updatedUser = await userModel.updateOne(
            {
              token: token
            },
            {
              login,
              firstName,
              lastName,
              email,
              role
          });
          if (updatedUser) {
            res.json({ result: true, success: 'Utilisateur modifié' });
          } else {
            res.json({ result: false, error: 'Nous avons rencontré un problème, recommencez' });
          }
        }
      }
    }
  }
})

module.exports = router;
