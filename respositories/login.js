const { User } = require('../models')

module.exports ={
    getUserByEmailPaswd(email,password){
        return User.findAll({
            where:{
              email:email,
              password:password
            },
            raw:true
          });
     }
}