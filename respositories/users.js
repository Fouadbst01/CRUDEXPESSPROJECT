const { User } = require('../models')

module.exports = {
    getAllUsersIdCreatDate(){
      return User.findAll({
        attributes:['id','createdAt'],
        raw:true})
    },
    getAllUsers() {
      return User.findAll()
    },
    // méthodes à implémenter
    getUsers(offset = 0, limit = 10) {
      return User.findAll({
        limit:limit,
        offset:offset
      })
     },
    getAdmins() {
      return User.findAll({
      where:{
        role:'admin'
      },
      raw:true
     }); 
    },
    getAuthors() {
      return User.findAll({
        where:{
          role:'author'
        },
        raw:true
       });
    },
    getGuests(){
      return User.findAll({
      where:{
        role:'guest'
      },
      raw:true
     });
    }, 
    getUser(idu) { 
      return User.findAll({
        where:{
          id:idu
        },
        raw:true
      });
    },
    getUserByEmail(email){ },
    addUser(user) { 
      return User.create({
        username :user["username"],
        email : user["email"],
        password : user["password"],
        role : user["role"],
        createdAt : new Date(),
        updatedAt : new Date()
      })
      .catch(function(err){
        console.log(err,user["email"])
      });
    },
    updateUser(user){
      return User.update({
        username :user["username"],
        password : user["password"],
        role : user["role"],
        updatedAt : new Date()
      },{
        where:{
          email: user["email"],
        }
      })
     },
    deleteUser(mail){
      return User.destroy({ where: { email: mail } });
     },
    // D'autres méthodes jugées utiles
  }
 