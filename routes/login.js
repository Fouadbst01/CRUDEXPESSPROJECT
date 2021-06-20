var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();

const logRepo = require('../respositories/login')
const JWT_SIGN_SECRET = 'MDwwDQYJKoZIhvcNAQEBBQADKwAwKAIhAJJES3e7jGQ0hvK9TT8K8WhhG46aYthNKKXabNG9xdLAgMBAAE';
router.post('/', async function(req,res,next){
    var response = await logRepo.getUserByEmailPaswd(req.body['email'],req.body['password']);
    if(response){
        const accessToken = jwt.sign({ id:response[0].id,email: response[0].email,  role: response[0].role }, JWT_SIGN_SECRET);
        res.json({accessToken});
    }

    else
        res.status(400).send('User or password incorrect')
});

module.exports = router;