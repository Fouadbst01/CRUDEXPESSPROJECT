var express = require('express');
const { ready } = require('jquery');
var router = express.Router();

const usersRepo = require('../respositories/users')
/* GET users listing. */
router.get('/', async function (req, res, next) {
  res.send(await usersRepo.getAllUsers())
});

router.get('/:id', async function (req, res, next) {
  var response = await usersRepo.getUser(req.params['id'])
  if (response)
    res.send(response);
  else
    res.status(404).send('not found')
});

router.get('/:mail', async function (req, res, next) {
  var response = await usersRepo.getUser(req.params['mail'])
  if (response)
    res.send(response);
  else
    res.status(404).send('not found')
});
router.get('/byrole/:role', async function (req, res, next) {
  var response
  switch (req.params['role']) {
    case "admin":
      response = await usersRepo.getAdmins();
      break
    case "guest":
      response = await usersRepo.getGuests();
      break
    case "author":
      response = await usersRepo.getAuthors();
      break
    default:
      response = await usersRepo.getAllUsers()
  }

  if (response)
    res.send(response);
  else
    res.status(404).send('not found')
});
router.get('/offlim/:offset/:limit?', async function (req, res, next) {
  var response
  if (req.params['offset'])
    if (req.params['limit'])
      response = await usersRepo.getUsers(parseInt(req.params['offset']), parseInt(req.params['limit']))
    else
      response = await usersRepo.getUsers(parseInt(req.params['offset']))
  else{
    console.log("here")
    response = await usersRepo.getUser(0,10)
  }
    
  if (response)
    res.send(response);
  else
    res.status(404).send('not found')
})
router.post('/', async function (req, res, next) {
  res.post(await usersRepo.addUser(req.body))
});

router.put('/', async function (req, res, next) {
  res.send(await usersRepo.updateUser(req.body))
})

router.delete('/', async function (req, res, next) {
  var response = await usersRepo.deleteUser(req.body['email']);
  if (response)
    res.send(response);
  else
    res.status(404).send('Delete user fail')
})

module.exports = router;
