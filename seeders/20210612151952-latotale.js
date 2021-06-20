'use strict';

var faker = require('faker');
var usersRepo = require('../respositories/users');
var articalRepo = require('../respositories/article');
var TagRepo = require('../respositories/tag');
const { fake } = require('faker');
const { sequelize } = require('../models');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    var role=["admin","guest","author"]
    const users = [...Array(20)].map((user) => (
     {
       username : faker.name.findName(),
       email : faker.internet.email(),
       password : faker.internet.password(),
       role : faker.random.arrayElement(role),
       createdAt : faker.date.between('2000-1-1', '2021-6-12'),
       updatedAt : new Date()
     }
    ))
   await queryInterface.bulkInsert('users',users,{});
    
    const tags = [...Array(10)].map((Tag) => (
      {
        name : faker.random.words(3),
        createdAt : faker.date.between('2000-1-1', '2021-6-12'),
        updatedAt : new Date()
      }
     ))
     await queryInterface.bulkInsert('tags',tags,{});

     var allusers = await usersRepo.getAllUsersIdCreatDate();
     var articales = []
     allusers.forEach(element => {
      var articale = [...Array(Math.floor((Math.random() * 2/*10) + 2*/)))].map((Tag) => (
        {
          title : faker.lorem.sentence(5),
          content : faker.lorem.paragraph(),
          published : "dontknow",
          UserId : element['id'],
          createdAt : faker.date.between(element['createdAt'], '2021-06-12'),
          updatedAt : new Date()
        }
       ))
       articales=articales.concat(articale)
     });
     await queryInterface.bulkInsert('articles',articales,{});
     var artitems =await articalRepo.getAllArtticleIdCreatDat();
     var comments=[];
     artitems.forEach( element => {
       var commnt=[...Array(Math.floor(Math.random()*10))].map( (Tag) => (
           {
               ArticleId:element['id'],
               content:faker.name.title(),
               createdAt :faker.date.between(element['createdAt'],'2021-06-13'),
               updatedAt : new Date()
          }
          ))
        comments=comments.concat(commnt);
      });
      await queryInterface.bulkInsert('comments',comments,{});
     var tagsartcal=[];
     var tagsid = await TagRepo.getTagsid();
     
     artitems.forEach((element)=>{
     var arr = [];
      while(arr.length < tagsid.length){
          var r = Math.floor(Math.random()*tagsid.length);
          if(arr.indexOf(r) === -1) arr.push(r);
      }
     var tagsart =[...Array(Math.floor((Math.random()*6)+2))].map( function(tag){
      return(
        {
            ArticleId:element['id'],
            TagId:tagsid[arr.pop()]['id'],
            createdAt :faker.date.between(element['createdAt'],'2021-06-13'),
            updatedAt : new Date()
        })
     }
     )
     
        tagsartcal=tagsartcal.concat(tagsart)
     })
     await queryInterface.bulkInsert('articletags',tagsartcal,{});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('users', null, {});
     await queryInterface.bulkDelete('articles', null, {});
     await queryInterface.bulkDelete('tags', null, {});
     await queryInterface.bulkDelete('comments', null, {});
     await queryInterface.bulkDelete('articletags', null, {});
     await queryInterface.sequelize.query("ALTER TABLE users  AUTO_INCREMENT=0;");
     await queryInterface.sequelize.query("ALTER TABLE articles  AUTO_INCREMENT=0;");
     await queryInterface.sequelize.query("ALTER TABLE comments  AUTO_INCREMENT=0;");
     await queryInterface.sequelize.query("ALTER TABLE tags  AUTO_INCREMENT=0;");
  }
};
